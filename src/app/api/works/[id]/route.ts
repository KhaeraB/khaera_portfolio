import { NextResponse } from "next/server";
import connect from "@/utils/data/db";
import Work, { IWork } from "@/models/Work";

export const GET = async (
  request: Request,
  { params }: { params: IWork },
): Promise<NextResponse> => {
  const { id } = params;

  try {
    await connect();

    const work = await Work.findById(id);
    return new NextResponse(JSON.stringify(work), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: { id: string } },
): Promise<NextResponse> => {
  const { id } = params;

  try {
    await connect();

    const work = await Work.findByIdAndDelete(id);

    if (!work) {
      return new NextResponse("Project not found", { status: 404 });
    }

    return new NextResponse("Project has been deleted", { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

// export const UPDATE = async (
//   request: Request,
//   { params, body }: { params: { id: string }; body: IWork },
// ): Promise<NextResponse> => {
//   const { id } = params;

//   try {
//     await connect();

//     const updatedWork = await Work.findByIdAndUpdate(id, body, { new: true });

//     if (!updatedWork) {
//       return new NextResponse("Project not found", { status: 404 });
//     }

//     return new NextResponse(JSON.stringify(updatedWork), { status: 200 });
//   } catch (err) {
//     console.error(err);
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };
