import { Button } from "@/components/ui/button";
import { useSlider } from "../slidercontext";
import Image from "next/image";
import { useEffect} from "react";
export default function Slider() {
  const { slider, nextImage, prevImage } = useSlider();
  useEffect(() => {
   const interval = setInterval(() => {
    nextImage();
   }, 10000);
   return () => clearInterval(interval);
  }, []);
  return (
   <>
   <div className="w-screen bg-slate-500 h-80 flex justify-center items-center">
   <Image src={slider.imgs[slider.currentImageIndex]} height={300} width={400} alt=""></Image>
   </div>
   <div className="flex w-screen justify-between align-middle items-center">
  <Button onClick={()=>{
   console.log("hlo")
   nextImage()
  }}>Next</Button>
  <Button onClick={()=>{
   prevImage()
  }}>Prev</Button>
 </div>
 </>
 );
} 