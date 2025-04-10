"use client"
import Slider from "./_components/slider";
import { SliderProvider } from "./slidercontext"
export default function Page() {
 return (
  <SliderProvider>
    <Slider/>
  </SliderProvider>
 );
}