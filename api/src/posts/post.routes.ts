import { Router } from "express";
import { getPost, listPosts, createPost } from "./post.controller";

const router = Router();

router.post("/post", createPost);
router.get("/", listPosts);
router.get("/:uuid", getPost);

export default router;
