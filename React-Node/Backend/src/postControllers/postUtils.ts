import path from "path";
import fs from "fs";
import { Post } from "./types";

const postsFile = path.join(__dirname, "posts.json");

function loadPosts() {
 if(!fs.existsSync(postsFile)){
  fs.writeFileSync(postsFile, JSON.stringify([]));
 }
 const data = fs.readFileSync(postsFile);
 return JSON.parse(data.toString());
}

function addPost(post:Post){
 const posts = loadPosts();
 posts.push(post);
 fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

function deletePost(id:number){
 const posts = loadPosts();
 const initialLength = posts.length;
 const filteredPosts = posts.filter((post:Post) => post.id !== id);
 fs.writeFileSync(postsFile, JSON.stringify(filteredPosts, null, 2));
 return initialLength > filteredPosts.length;
}

function likePost(id:number,username:string){
 const posts = loadPosts();
 const postIndex = posts.findIndex((post:Post) => post.id === id);
 posts[postIndex].likes.count++;
 posts[postIndex].likes.likedBy.push(username);
 fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

function unlikePost(id:number,username:string){
 const posts = loadPosts();
 const postIndex = posts.findIndex((post:Post) => post.id === id);
 posts[postIndex].likes.count--;
 posts[postIndex].likes.likedBy = posts[postIndex].likes.likedBy.filter((user:string) => user !== username);
 fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

export const PostUtilsHandler={
 loadPosts,
 addPost,
 deletePost,
 likePost,
 unlikePost
}