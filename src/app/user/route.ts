// src/app/user/route.ts
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
    return new Response(JSON.stringify({ message: 'ok' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    return new Response(JSON.stringify({ received: data }), { status: 201 });
}
