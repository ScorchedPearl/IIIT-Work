"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUtilsHandler = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const postsFile = path_1.default.join(__dirname, "posts.json");
function loadPosts() {
    if (!fs_1.default.existsSync(postsFile)) {
        fs_1.default.writeFileSync(postsFile, JSON.stringify([]));
    }
    const data = fs_1.default.readFileSync(postsFile);
    return JSON.parse(data.toString());
}
function addPost(post) {
    const posts = loadPosts();
    posts.push(post);
    fs_1.default.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}
function deletePost(id) {
    const posts = loadPosts();
    const initialLength = posts.length;
    const filteredPosts = posts.filter((post) => post.id !== id);
    fs_1.default.writeFileSync(postsFile, JSON.stringify(filteredPosts, null, 2));
    return initialLength > filteredPosts.length;
}
function likePost(id, username) {
    const posts = loadPosts();
    const postIndex = posts.findIndex((post) => post.id === id);
    posts[postIndex].likes.count++;
    posts[postIndex].likes.likedBy.push(username);
    fs_1.default.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}
function unlikePost(id, username) {
    const posts = loadPosts();
    const postIndex = posts.findIndex((post) => post.id === id);
    posts[postIndex].likes.count--;
    posts[postIndex].likes.likedBy = posts[postIndex].likes.likedBy.filter((user) => user !== username);
    fs_1.default.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}
exports.PostUtilsHandler = {
    loadPosts,
    addPost,
    deletePost,
    likePost,
    unlikePost
};
