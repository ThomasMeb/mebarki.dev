import { NextResponse } from "next/server";

const VAULT_ADDRESS = "0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08";
const DHEDGE_API = "https://api-v2.dhedge.org/graphql";
const CG_API =
  "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily";
const WEI = 1e18;

export const revalidate = 600; // ISR 10 min

async function getVault() {
  const query = `{
    fund(address: "${VAULT_ADDRESS}") {
      tokenPrice
      totalValue
      sortinoRatio
      performance
      performanceMetrics { week month quarter halfyear year }
    }
  }`;
  const res = await fetch(DHEDGE_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 600 },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const fund = json?.data?.fund;
  if (!fund) return null;
  const m = fund.performanceMetrics || {};
  const toPct = (v?: string) => (v != null ? (parseInt(v) / WEI - 1) * 100 : null);
  return {
    tokenPrice: (parseInt(fund.tokenPrice) / WEI).toFixed(6),
    totalValue: (parseInt(fund.totalValue) / WEI).toFixed(2),
    sortino: fund.sortinoRatio != null ? parseFloat(fund.sortinoRatio) : null,
    perfInception: fund.performance ? (parseInt(fund.performance) / WEI - 1) * 100 : null,
    perf7d: toPct(m.week),
    perf30d: toPct(m.month),
    perfQuarter: toPct(m.quarter),
    perfHalfyear: toPct(m.halfyear),
    perfYear: toPct(m.year),
  };
}

// Bitcoin benchmark (buy & hold) for the same windows — the honest reference
// for a BTC trading strategy.
async function getBtc() {
  const res = await fetch(CG_API, {
    headers: { Accept: "application/json" },
    next: { revalidate: 600 },
  });
  if (!res.ok) return null;
  const json = await res.json();
  const prices: number[] = (json?.prices || []).map((p: [number, number]) => p[1]);
  if (prices.length < 30) return null;
  const now = prices[prices.length - 1];
  const back = (days: number) => {
    const i = Math.max(0, prices.length - 1 - days);
    return (now / prices[i] - 1) * 100;
  };
  return { d7: back(7), d30: back(30), d90: back(90), d180: back(180), d365: back(364) };
}

export async function GET() {
  const [vault, btc] = await Promise.all([
    getVault().catch(() => null),
    getBtc().catch(() => null),
  ]);

  if (!vault) {
    return NextResponse.json({ error: "no vault data" }, { status: 502 });
  }

  return NextResponse.json({ ...vault, btc });
}
