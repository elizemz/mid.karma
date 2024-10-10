import { NextResponse } from "next/server";
import axios from "axios";

const BRAWL_API_URL = "https://api.brawlstars.com/v1";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const playerTag = searchParams.get("tag");

  if (!playerTag) {
    return NextResponse.json(
      { error: "Player tag is required" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `${BRAWL_API_URL}/players/${encodeURIComponent(playerTag)}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BRAWL_STARS_API_KEY}`,
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch player data" },
      { status: 500 }
    );
  }
}
