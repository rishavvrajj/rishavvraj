// app/api/visitors/route.ts  (App Router)
// or pages/api/visitors.ts  (Pages Router)

import type { NextRequest } from "next/server";

const VERCEL_TOKEN = process.env.VERCEL_TOKEN!;
const PROJECT_ID = process.env.VERCEL_PROJECT_ID!;

const BASE_URL = "https://api.vercel.com/v1/query/web-analytics/visits/count";

export async function GET(req: NextRequest) {
  const params = new URLSearchParams({
    projectId: PROJECT_ID,
    filter: "requestPath eq '/'",
  });

  const res = await fetch(`${BASE_URL}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
    },
  });

  if (!res.ok) {
    return new Response("Error fetching analytics", { status: 500 });
  }

  const data = await res.json();
  // data.data.pageviews, data.data.visitors
  return Response.json({ visitors: data.data.visitors, pageviews: data.data.pageviews });
}