import { RefObject } from "react"

export const handleScroll=(e:Event,imageRef:RefObject<HTMLImageElement | null>)=>{
 console.log("keydown")
 if(imageRef.current){
  imageRef.current.src="/globe.svg";
 }
 else{
  return
 }
}