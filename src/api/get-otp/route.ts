import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { mobile } = await request.json();

  try {
    const response = await fetch('http://13.233.99.54:4000/api/v1/user/get-otp', {
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