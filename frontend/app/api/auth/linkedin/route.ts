import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { code } = await request.json();

  const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
  const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_REDIRECT_URI;

  try {
    const params = new URLSearchParams();
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", REDIRECT_URI!);
    params.append("client_id", CLIENT_ID!);
    params.append("client_secret", CLIENT_SECRET!);

    const tokenRes = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      }
    );

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok) {
      return NextResponse.json(
        { message: "Token exchange failed", error: tokenData },
        { status: 400 }
      );
    }

    const accessToken = tokenData.access_token;

    const profileRes = await fetch("https://api.linkedin.com/v2/userinfo", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const profileData = await profileRes.json();

    return NextResponse.json(profileData);
  } catch (error) {
    console.error("LinkedIn Auth Error:", error);
    return NextResponse.json(
      { message: "LinkedIn Auth Failed" },
      { status: 500 }
    );
  }
}
