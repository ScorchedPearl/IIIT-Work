import { Router } from "express";
import { PostUtilsHandler } from "./postUtils";

const postRouter = Router();

postRouter.get("/", (req, res) => {
  const posts=PostUtilsHandler.loadPosts();
  res.status(200).send({
    message: "Posts fetched successfully",
    posts,
  });
});

postRouter.post("/", (req, res) => {
  const { id, title, content, likes, username } = req.body;
  const post = {
    id,
    title,
    content,
    likes,
    username,
  };
  PostUtilsHandler.addPost(post);
  res.status(200).send({
    message: "Post added successfully",
    post,
  });
});

postRouter.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = PostUtilsHandler.deletePost(id);
  if (deleted) {
    res.status(200).send({
      message: "Post deleted successfully",
    });
  } else {
    res.status(404).send({
      message: "Post not found",
    });
  }
})


postRouter.post("/:id/like", (req, res) => {
  const id = parseInt(req.params.id);
  const { username } = req.body;
  PostUtilsHandler.likePost(id,username);
  res.status(200).send({
    message: "Post liked successfully",
  });
 });

 postRouter.post("/:id/unlike", (req, res) => {
  const id = parseInt(req.params.id);
  const { username } = req.body;
  PostUtilsHandler.unlikePost(id,username);
  res.status(200).send({
    message: "Post unliked successfully",
  });
 }
 );
export const PostHandler = {
  postRouter,
};