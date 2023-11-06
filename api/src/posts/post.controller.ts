import { Request, Response } from "express";
import { create, findAll, findOneById } from "./post.service";
import { PostResponse } from "./post.interfaces";

const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = await create(req.body);
    const response: PostResponse = { ...newPost };
    res.send(response);
  } catch (e) {
    res.status(500);
    res.send({ e });
  }
};

const listPosts = async (req: Request, res: Response) => {
  try {
    const list = await findAll();
    if (list.length > 0) {
      res.send(list);
    }

    res.status(404);
    res.send("Posts not found");
  } catch (e) {
    res.status(500);
    res.send({ e });
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const uuid = req.query.uuid;
    if (uuid) {
      const post = await findOneById(uuid.toString());
      if (post) {
        res.send(post);
        return;
      }
    }
    res.status(404);
    res.send("Post not found");
  } catch (e) {
    res.status(500);
    res.send({ e });
  }
};

export { createPost, listPosts, getPost };
