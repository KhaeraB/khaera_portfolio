import { NextResponse } from "next/server";
import connect from "@/utils/data/db";
import Work, { IWork } from "@/models/Work";

export const GET = async (
  request: Request,
  { params }: { params: IWork }
): Promise<NextResponse> => {
  const { id } = params;

  try {
    await connect();

    const post = await Work.findById(id);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
