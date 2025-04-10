import PostCards from "./_components/PostCards";
import PostInput from "./_components/PostInput";
import { PostProvider } from "./postContext";

export default function Page() {
 return (
  <PostProvider>
    <PostCards></PostCards>
    <PostInput></PostInput>
  </PostProvider>
 );
}