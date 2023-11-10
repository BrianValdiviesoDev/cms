import { CreatePost, PostDocument, UpdatePost } from "./post.interfaces";
import PostModel from "./post.schema";
import { v4 as uuidv4 } from "uuid";

//TODO implements auth
//TODO if you are not logged you only can get active posts
//TODO if you are note logged you can not create, update, publish or draft

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
  return await PostModel.findOne({ uuid });
};
export const update = async (
  uuid: string,
  update: UpdatePost
): Promise<PostDocument | null> => {
  return await PostModel.findOneAndUpdate({ uuid }, update, { new: true });
};

export const publish = async (uuid: string): Promise<PostDocument | null> => {
  const post = await PostModel.findOne({ uuid });
  if (!post) {
    throw new Error("Post not found");
  }

  if (!post.publishDate) {
    post.publishDate = new Date();
  }
  post.active = true;
  return await PostModel.findOneAndUpdate({ uuid }, post, { new: true });
};

export const moveToDraft = async (
  uuid: string
): Promise<PostDocument | null> => {
  return await PostModel.findOneAndUpdate(
    { uuid },
    { active: false },
    { new: true }
  );
};

export const remove = async (uuid: string): Promise<any> => {
  const result = await PostModel.deleteOne({ uuid });
  return result;
};
