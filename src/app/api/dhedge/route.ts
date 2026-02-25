import { NextResponse } from "next/server";

const VAULT_ADDRESS = "0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08";
const DHEDGE_API = "https://api-v2.dhedge.org/graphql";
const WEI = 1e18;

export const revalidate = 600; // ISR 10 min

export async function GET() {
  const query = `{
    fund(address: "${VAULT_ADDRESS}") {
      name
      tokenPrice
      totalValue
      performanceMetrics {
        week
        month
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

    const tokenPrice = (parseInt(fund.tokenPrice) / WEI).toFixed(6);
    const totalValue = (parseInt(fund.totalValue) / WEI).toFixed(2);
    const perf = fund.performanceMetrics || {};
    const perf7d = perf.week ? (parseInt(perf.week) / WEI - 1) * 100 : 0;
    const perf30d = perf.month ? (parseInt(perf.month) / WEI - 1) * 100 : 0;

    return NextResponse.json({ tokenPrice, totalValue, perf7d, perf30d });
  } catch {
    return NextResponse.json({ error: "fetch failed" }, { status: 500 });
  }
}
