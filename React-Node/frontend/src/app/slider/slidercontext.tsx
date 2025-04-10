import React, { createContext, useContext, useMemo, useState } from "react";

interface Slider {
  imgs: string[];
  currentImageIndex: number;
}

interface SliderContextType {
  slider: Slider;
  nextImage: () => void;
  prevImage: () => void;
}

const SliderContext = createContext<SliderContextType>({
  slider: { imgs: [], currentImageIndex: 0 },
  nextImage: () => {},
  prevImage: () => {},
});

export const SliderProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [slider, setSlider] = useState<Slider>({
    imgs: [
      "https://img.pokemondb.net/artwork/large/venusaur.jpg",
      "https://img.pokemondb.net/artwork/large/blastoise.jpg",
      "https://img.pokemondb.net/artwork/large/charizard.jpg",
    ],
    currentImageIndex: 0,
  });

  const nextImage = useMemo(
    () => () => {
      setSlider((slider) => {
        const newSlider = {
          ...slider,
        };
        newSlider.currentImageIndex =
          (newSlider.currentImageIndex + 1) % newSlider.imgs.length;
        return newSlider;
      });
    },
    []
  );

  const prevImage = useMemo(
    () => () => {
      setSlider((slider) => {
        const newSlider = {
          ...slider,
        };
        newSlider.currentImageIndex -= 1;
        if (newSlider.currentImageIndex < 0) {
          newSlider.currentImageIndex = newSlider.imgs.length - 1;
        }
        return newSlider;
      });
    },
    []
  );

  return (
    <SliderContext.Provider value={{ slider, nextImage, prevImage }}>
      {children}
    </SliderContext.Provider>
  );
};

export const useSlider = () => useContext(SliderContext);
