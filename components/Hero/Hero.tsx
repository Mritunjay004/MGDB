import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  imgUrl: string;
  title: string;
  text: string;
};

const Hero = ({ imgUrl, title, text }: Props) => {
  return (
    <div className="h-[40rem] w-full relative ">
      <div className="relative flex flex-col-reverse h-full max-w-7xl m-auto z-10 text-center pb-12 md:text-left ">
        {/* text */}
        <div className="text-white max-w-2xl px-4">
          <h2 className="text-2xl md:text-5xl font-bold pb-8">{title} </h2>
          <p className="text-lg md:text-xl">{text} </p>
        </div>
      </div>

      <Image
        priority
        objectFit="cover"
        objectPosition="center"
        layout="fill"
        src={imgUrl}
        alt="hero-img"
      />
    </div>
  );
};

export default Hero;
