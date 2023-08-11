import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connect = async (): Promise<void> => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.DATABASE_URL);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
