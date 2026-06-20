import { NextResponse } from "next/server";

const VAULT_ADDRESS = "0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08";
const DHEDGE_API = "https://api-v2.dhedge.org/graphql";
const WEI = 1e18;

export const revalidate = 600; // ISR 10 min

export async function GET() {
  const query = `{
    fund(address: "${VAULT_ADDRESS}") {
      tokenPrice
      totalValue
      sortinoRatio
      performance
      performanceMetrics {
        week
        month
        quarter
        halfyear
        year
      }
    }
  }`;

  try {
    const res = await fetch(DHEDGE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "dHEDGE API error" }, { status: 502 });
    }

    const json = await res.json();
    const fund = json?.data?.fund;

    if (!fund) {
      return NextResponse.json({ error: "No fund data" }, { status: 404 });
    }

    const m = fund.performanceMetrics || {};
    // performanceMetrics are returned as 1e18-scaled multipliers (1.0 = no change)
    const toPct = (v?: string) =>
      v != null ? (parseInt(v) / WEI - 1) * 100 : null;

    return NextResponse.json({
      tokenPrice: (parseInt(fund.tokenPrice) / WEI).toFixed(6),
      totalValue: (parseInt(fund.totalValue) / WEI).toFixed(2),
      sortino: fund.sortinoRatio != null ? parseFloat(fund.sortinoRatio) : null,
      perfInception: fund.performance
        ? (parseInt(fund.performance) / WEI - 1) * 100
        : null,
      perf7d: toPct(m.week),
      perf30d: toPct(m.month),
      perfQuarter: toPct(m.quarter),
      perfHalfyear: toPct(m.halfyear),
      perfYear: toPct(m.year),
    });
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
