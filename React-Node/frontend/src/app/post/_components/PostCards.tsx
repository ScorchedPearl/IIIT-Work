"use client"
import { Button } from "@/components/ui/button";
import { Post, usePost } from "../postContext";
import { useUser } from "@/app/_provider/userProvider";
import { useMemo, useRef } from "react";
import { Heart } from "lucide-react";

export default function PostCards() {
  const { posts, likePost, unlikePost, removePost } = usePost();
  const {user}=useUser();
  const likeRefs = useRef<(SVGSVGElement | null)[]>([]);
  const isLiked = 
  useMemo(() =>{
   if(posts.length===0){
    return [];
   }
   return posts.map((post) => post.likes.likedBy.includes(user.username))}, [posts, user]);

  const handleLike=(post:Post)=>{
   const index=posts.indexOf(post);
      if (isLiked[index]) {
       unlikePost(post.id);
       if (likeRefs.current[index]) {
        likeRefs.current[index]?.classList.remove("text-red-400");
        likeRefs.current[index]?.classList.add("text-slate-200");
       }
      } else {
       likePost(post.id);
       if (likeRefs.current[index]) {
        likeRefs.current[index]?.classList.remove("text-slate-200");
        likeRefs.current[index]?.classList.add("text-red-400");
       }
      }
    }
  return (
   !posts? (
    <div className="bg-rose-100/20 m-4 rounded-lg shadow-md border border-black w-full max-w-2xl mx-auto"> 
     <div className="p-4 bg-cyan-200 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">No posts available</h2>
     </div>
    </div>
   ) : (
   <div className="grid grid-cols-1 gap-4">
    {posts.map((post, index) => (
     <div
      key={post.id}
      className="bg-rose-100/20 m-4 rounded-lg shadow-md border border-black w-full max-w-2xl mx-auto"
     >
      <div className="p-4 bg-cyan-200 rounded-lg shadow-md">
       <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-3 items-center border border-black p-2 rounded-lg">
         <h2 className="text-xl font-semibold">{post.title}</h2>
         <p className="text-sm text-gray-600">Posted by: {post.username}</p>
         <Button
          onClick={() => removePost(post.id)}
          className="ml-auto bg-red-400 text-white hover:bg-rose-700"
         >
          Delete
         </Button>
        </div>
        <div className="border border-black p-2 rounded-lg">
         <p className="text-gray-800">{post.content}</p>
        </div>
        <div className="flex flex-row items-center justify-between border border-black p-2 rounded-lg">
         <p className="text-gray-600">Likes: {post.likes.count}</p>
         <Heart
          onClick={() => handleLike(post)}
          ref={(el) => {(likeRefs.current[index] = el)}}
          className={`cursor-pointer ${
           isLiked[index] ? "text-red-400" : "text-slate-200"
          }`}
         />
        </div>
       </div>
      </div>
     </div>
    ))}
   </div>
   )
  );
 }
