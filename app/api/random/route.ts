import { NextResponse } from "next/server";
import prismadb from '@/lib/prismadb';


export async function GET() {

    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovie = await prismadb.movie.findMany({
        take: 1,
        skip: randomIndex,
    });

    return NextResponse.json(randomMovie[0]);

}
