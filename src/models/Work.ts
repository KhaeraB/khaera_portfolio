import mongoose, { Document, Schema } from "mongoose";

export interface IWork extends Document {
  title: string;
  category: string;
  desc: string;
  image: string;
  giturl: string;
  siteurl: string;
  skills: string[];
  mocks: string[];
}

const workSchema = new Schema<IWork>(
  {
    title: String,
    category: String,
    desc: String,
    image: String,
    giturl: String,
    siteurl: String,
    skills: [
      {
        type: String,
      },
    ],
    mocks: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

const Work = mongoose.models.Work || mongoose.model("Work", workSchema);

export default Work;
