import { Router } from "express";
import {
  getPost,
  listPosts,
  createPost,
  updatePost,
  publishPost,
  draftPost,
  deletePost,
} from "./post.controller";

const router = Router();

router.post("/", createPost);
router.get("/", listPosts);
router.get("/:uuid", getPost);
router.put("/:uuid", updatePost);
router.put("/publish/:uuid", publishPost);
router.put("/draft/:uuid", draftPost);
router.delete("/:uuid", deletePost);

export default router;
