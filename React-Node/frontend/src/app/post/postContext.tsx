"use client"
import { useContext,createContext,useState,useCallback, useEffect } from "react"
import { useUser } from "../_provider/userProvider";
import axios from "axios";

export interface Post{
  id:number;
  title:string;
  content:string;
  likes:Like;
  username:string;
}

interface Like{
  count:number;
  likedBy:string[];
}

interface PostContextType {
  posts:Post[];
  addPost: (post: Post) => void;
  removePost: (id: number) => void;
  likePost: (id: number) => void;
  unlikePost: (id: number) => void;
}

const PostContext=createContext<PostContextType>({
  posts: [],
  addPost: () => {},
  removePost: () => {},
  likePost: () => {},
  unlikePost: () => {},
});

export const PostProvider = ({children}:{children:React.ReactNode}) => {
  const [posts, setPosts] = useState<Post[]>([
  ]);
  useEffect(()=>{
    const fetchPosts=async()=>{
      const response=await axios.get("http://localhost:8000/posts");
      const data = response.data;
      const convertedData = Array.isArray(data) ? data : Object.values(data.posts);
      setPosts(convertedData);
    }
    fetchPosts();
  },[])
  const {user}=useUser();
  const addPost = useCallback(async(post: Post) => {
    await axios.post("http://localhost:8000/posts",{
      id: post.id,
      title: post.title,
      content: post.content,
      likes: post.likes,
      username: user.username
    }
    );
    setPosts((prevPosts) => [...prevPosts, post]);
  }, []);
  const removePost = useCallback(async(id: number) => {
    await axios.delete(`http://localhost:8000/posts/${id}`);
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  }, []);
  const likePost = useCallback(async(id: number) => {
    await axios.post(`http://localhost:8000/posts/${id}/like`,{
      username:user.username
    });
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, likes: { ...post.likes, count: post.likes.count + 1 ,likedBy:[...post.likes.likedBy,user.username]} }
          : post
      )
    );
  }, []);
  const unlikePost = useCallback(async(id: number) => {
   await axios.post(`http://localhost:8000/posts/${id}/unlike`,{
      username:user.username
    }); 
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, likes: { ...post.likes, count: post.likes.count - 1 ,likedBy:post.likes.likedBy.filter((username)=>username!==user.username)} }
          : post
      )
    );
  }, []);
  return(
    <PostContext.Provider value={{posts, addPost, removePost, likePost, unlikePost}}>
      {children}
    </PostContext.Provider>
  )
}

export const usePost=() => useContext(PostContext);
