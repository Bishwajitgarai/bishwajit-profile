import { NextResponse } from "next/server";
import { headers } from "next/headers";
import fs from "fs";
import path from "path";

// Path to store visit data (local development only)
const statsFilePath = path.join(process.cwd(), "visitor_stats.json");

function getStats() {
  try {
    if (fs.existsSync(statsFilePath)) {
      const data = fs.readFileSync(statsFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch (e) {
    console.error("Error reading stats file:", e);
  }
  return { uniqueIps: [], count: 0, lastBroadcast: new Date().toISOString() };
}

function saveStats(stats: any) {
  try {
    fs.writeFileSync(statsFilePath, JSON.stringify(stats, null, 2), "utf8");
  } catch (e) {
    console.error("Error saving stats file:", e);
  }
}

export async function GET() {
  const stats = getStats();
  return NextResponse.json({
    uniqueViews: stats.count,
    lastBroadcast: stats.lastBroadcast
  });
}

export async function POST() {
  const headersList = await headers();
  const ip = headersList.get("x-forwarded-for") || "unknown";
  
  const stats = getStats();
  
  // Check if IP is unique
  if (!stats.uniqueIps.includes(ip) && ip !== "unknown") {
    stats.uniqueIps.push(ip);
    stats.count = stats.uniqueIps.length;
    saveStats(stats);
  }

  return NextResponse.json({
    success: true,
    uniqueViews: stats.count,
    lastBroadcast: stats.lastBroadcast
  });
}
