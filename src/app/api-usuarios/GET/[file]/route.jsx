import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(request,{params}) {
    const file = await fs.readFile(process.cwd() + "/src/app/api-usuarios/base/db.json", "utf8");
    return NextResponse.json(JSON.parse(file));
}
