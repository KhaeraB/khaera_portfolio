import { NextResponse } from "next/server";
import connect from "@/utils/data/db";

import Work from "@/models/Work";

export const GET = async (request: Request): Promise<NextResponse> => {
  const url = new URL(request.url);
  const adminname = url.searchParams.get("adminname");
  //fetch
  try {
    await connect();
    let filter = {};

    if (adminname) {
      filter = { adminname };
    }

    const works = await Work.find(filter);
    // Serializer of data in JSON
    const worksJSON = JSON.stringify(works);

    // resend response with content JSON
    return new NextResponse(worksJSON, {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Define  type of content
      },
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
export const POST = async (request: Request): Promise<NextResponse> => {
  const body = await request.json();
  console.log(typeof body.skills);
  const newProject = new Work(body);

  //fetch
  try {
    await connect();
    await newProject.save();
    return new NextResponse("Project has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
