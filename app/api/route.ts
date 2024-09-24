import { getServerSession } from "next-auth"
import { authOptions } from "../lib/authOptions"
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ authenticated: !!session })
}