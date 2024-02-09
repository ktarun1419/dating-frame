import { NextRequest, NextResponse } from "next/server";

async function getresponse(req:NextRequest) : Promise<Response>{
    return new NextResponse(``)
}
export async function POST(req:NextRequest):Promise<Response>{
    return getresponse(req)
}