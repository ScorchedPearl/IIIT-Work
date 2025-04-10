"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostHandler = void 0;
const express_1 = require("express");
const postUtils_1 = require("./postUtils");
const postRouter = (0, express_1.Router)();
postRouter.get("/", (req, res) => {
    const posts = postUtils_1.PostUtilsHandler.loadPosts();
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
    postUtils_1.PostUtilsHandler.addPost(post);
    res.status(200).send({
        message: "Post added successfully",
        post,
    });
});
postRouter.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = postUtils_1.PostUtilsHandler.deletePost(id);
    if (deleted) {
        res.status(200).send({
            message: "Post deleted successfully",
        });
    }
    else {
        res.status(404).send({
            message: "Post not found",
        });
    }
});
postRouter.post("/:id/like", (req, res) => {
    const id = parseInt(req.params.id);
    const { username } = req.body;
    postUtils_1.PostUtilsHandler.likePost(id, username);
    res.status(200).send({
        message: "Post liked successfully",
    });
});
postRouter.post("/:id/unlike", (req, res) => {
    const id = parseInt(req.params.id);
    const { username } = req.body;
    postUtils_1.PostUtilsHandler.unlikePost(id, username);
    res.status(200).send({
        message: "Post unliked successfully",
    });
});
exports.PostHandler = {
    postRouter,
};
