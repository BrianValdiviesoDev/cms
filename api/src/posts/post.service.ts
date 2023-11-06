import { CreatePost, PostDocument, UpdatePost } from "./post.interfaces";
import PostModel from "./post.schema";
import { v4 as uuidv4 } from "uuid";

export const create = async (post: CreatePost): Promise<PostDocument> => {
  const createPost = { ...post, uuid: uuidv4() };
  return await PostModel.create(createPost);
};

export const findAll = async (): Promise<PostDocument[]> => {
  return await PostModel.find({});
};

export const findOneById = async (
  uuid: string
): Promise<PostDocument | null> => {
  return await PostModel.findOne({ uuid, active: true });
};
export const update = async (
  uuid: string,
  update: UpdatePost
): Promise<PostDocument | null> => {
  return await PostModel.findOneAndUpdate({ uuid }, { update });
};
