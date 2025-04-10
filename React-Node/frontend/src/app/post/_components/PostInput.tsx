"use client"
import { useForm } from "react-hook-form";
import { usePost } from "../postContext";
import zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/app/_provider/userProvider";

const PostSchema=zod.object({
 title:zod.string().min(1,"Title is required"),
 content:zod.string().min(1,"Content is required"),
});

export default function PostInput(){
 const {user}=useUser();
 const {posts,addPost} = usePost();
 const {
  handleSubmit,
  register,
  formState: { isSubmitting,errors },
  reset,
 }=useForm({
  resolver:zodResolver(PostSchema),
  defaultValues:{
   title:"",
   content:"",
  },
 });
 const onSubmit=async (data: zod.infer<typeof PostSchema>) => {
  const newPost = {
   id: posts.length + 1,
   title: data.title,
   content: data.content,
   likes: {
    count: 0,
    likedBy: [],
   },
   username:user.username,
  };
  addPost(newPost);
  reset();
 };
 return (
  <div className="bg-rose-100/20 m-4 rounded-lg shadow-md border border-black w-full max-w-2xl mx-auto">
   <form
    onSubmit={handleSubmit(onSubmit)}
    className="p-4 bg-cyan-200 rounded-lg shadow-md"
   >
    <div className="flex flex-col gap-4">
     <input
      {...register("title")}
      type="text"
      placeholder="Title"
      className={`border border-black p-2 rounded-lg ${
       errors.title ? "border-red-500" : ""
      }`}
     />
     {errors.title && (
      <span className="text-red-500">{errors.title.message}</span>
     )}
     <textarea
      {...register("content")}
      placeholder="Content"
      className={`border border-black p-2 rounded-lg ${
       errors.content ? "border-red-500" : ""
      }`}
     />
     {errors.content && (
      <span className="text-red-500">{errors.content.message}</span>
     )}
     <button
      type="submit"
      disabled={isSubmitting}
      className="bg-blue-500 text-white hover:bg-blue-700 p-2 rounded-lg"
     >
      Submit
     </button>
    </div>
   </form>
  </div>
 );
}