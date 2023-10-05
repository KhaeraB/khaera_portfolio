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
