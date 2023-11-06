import { Model, Schema, model } from "mongoose";
import { PostDocument } from "./post.interfaces";

const PostSchema = new Schema<PostDocument>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
      default: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    publishDate: {
      type: Date,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const PostModel: Model<PostDocument> = model("Post", PostSchema);
export default PostModel;
