import Image from "next/image";
import Link from "next/link";
export default function Page() {
 return (
  <div className="grid grid-rows-1 grid-cols-12 w-full">
   <div className="[grid-area:1/1/2/2]">
    <Image src="./next.svg" alt="Logo" className="h-8 w-auto m-8 text-blue-700" width={200} height={200}/>
   </div>

   <div className="[grid-area:1/5/2/9] ">
    <nav>
     <ul className="flex justify-center items-center px-16 space-x-4 m-4 p-4 border border-gray-300 rounded-lg shadow-md bg-blue-100/20">
    <li><Link href={"./todo"}  className="text-blue-400 m-2 hover:underline bold text-xl">Todo</Link></li>
    <li><Link href={"./slider"}className="text-blue-400 m-2 hover:underline bold text-xl">Slider</Link></li>
    <li><Link href={"./post"} className="text-blue-400 m-2 hover:underline bold text-xl">Posts</Link></li>
     </ul>
    </nav>
   </div>
 
   <div className="[grid-area:1/11/2/13] flex justify-center p-4 m-1 align-middle items-center">
    <Link href={"./auth"}><button className="bg-blue-500 text-white px-4 py-2  m-2 rounded">Login</button></Link>
   </div>
  </div>
 );
}