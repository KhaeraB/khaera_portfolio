import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async (): Promise<void> => {
  try {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable not set");
    }

    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
