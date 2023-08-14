import { NextResponse } from "next/server";
import connect from "@/utils/data/db";

import Work from "@/models/Work";

export const GET = async (request: Request): Promise<NextResponse> => {
  //fetch
  try {
    await connect();
    const works = await Work.find();
    // Sérialiser les données en JSON
    const worksJSON = JSON.stringify(works);

    // Renvoyer la réponse avec le contenu JSON
    return new NextResponse(worksJSON, {
      status: 200,
      headers: {
        "Content-Type": "application/json", // Définir le type de contenu
      },
    });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
