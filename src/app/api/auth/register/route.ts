"use client";
import Admin from "@/models/Admin";
import connect from "@/utils/data/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new Admin({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (err: any) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};
