import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { mobile } = await request.json();

  try {
    const response = await fetch('https://cadabamsapi.exar.ai/api/v1/user/auth/get-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobile }),
    });

    if (response.ok) {
      return NextResponse.json({ message: 'OTP sent successfully' });
    } else {
      return NextResponse.json({ error: 'Failed to send OTP' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}