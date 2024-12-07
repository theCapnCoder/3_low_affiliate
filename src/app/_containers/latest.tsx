import { Play } from "@/assets/svg";
import SlideLarge from "../../../public/img/slider/slide_large.jpg";
import Image from "next/image";
import { LatestCards } from "./data";

export const Latest = () => {
  return (
    <section className="py-5 text-blue_dark">
      <h3 className="mb-8 font-bitter text-4xl tracking-wide">
        Latest from the Blog
      </h3>

      <div className="grid grid-cols-2 grid-rows-3 gap-x-10 gap-y-5 mb-20">
        <div className="col-span-1 row-span-3">
          <div className="relative mb-2 max-h-[400px] h-full">
            <Image src={SlideLarge} alt="slide_large" fill objectFit="cover" />
          </div>

          <h4 className="mb-3 font-bitter text-3xl">
            How to Prep Your Lawn in the Spring
          </h4>
          <p className="tracking-tighte max-w-[53ch] leading-tight">
            This is the blog description text. This is the blog description
            text. This is the blog description text.
          </p>
        </div>

        {LatestCards.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <Image src={item.img} alt={item.alt} />
            <p className="text-lg">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-1">
        <Play />
        <p>View All Blog Articles</p>
      </div>
    </section>
  );
};
