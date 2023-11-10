import { Request, Response } from "express";
import {
  create,
  findAll,
  findOneById,
  moveToDraft,
  publish,
  remove,
  update,
} from "./post.service";
import { PostResponse } from "./post.interfaces";

const createPost = async (req: Request, res: Response) => {
  try {
    //TODO set author based on jwt
    const data = {
      ...req.body,
      author: "Brian Valdivieso",
    };
    const newPost = await create(data);
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
      return;
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
    const uuid = req.params.uuid;
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

const updatePost = async (req: Request, res: Response) => {
  try {
    const uuid = req.params.uuid;
    if (uuid) {
      const post = await update(uuid.toString(), req.body);
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

const publishPost = async (req: Request, res: Response) => {
  try {
    const uuid = req.params.uuid;
    if (uuid) {
      const post = await publish(uuid.toString());
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

const draftPost = async (req: Request, res: Response) => {
  try {
    const uuid = req.params.uuid;
    if (uuid) {
      const post = await moveToDraft(uuid.toString());
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

const deletePost = async (req: Request, res: Response) => {
  try {
    const uuid = req.params.uuid;
    const post = await remove(uuid.toString());
    res.status(200);
    res.send("Post deleted");
  } catch (e) {
    res.status(500);
    res.send({ e });
  }
};

export {
  createPost,
  listPosts,
  getPost,
  updatePost,
  publishPost,
  draftPost,
  deletePost,
};
