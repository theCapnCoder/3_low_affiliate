import { Play } from "@/assets/svg";
import SlideLarge from "../../../public/img/slider/slide_large.jpg";
import Image from "next/image";
import { LatestCards } from "./data";

export const Latest = () => {
  return (
    <section className="text-blue_dark">
      <h3 className="font-bitter text-4xl">Latest from the Blog</h3>

      <div className="grid grid-cols-2">
        <div className="col-span-3 row-span-1">
          <Image src={SlideLarge} alt="slide_large" />

          <h4 className="font-bitter text-3xl">
            How to Prep Your Lawn in the Spring
          </h4>
          <p className="leading-tight">
            This is the blog description text. This is the blog description
            text. This is the blog description text.
          </p>
        </div>

        <div>
          {LatestCards.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={item.img} alt={item.alt} />
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Play />
        <p>View All Blog Articles</p>
      </div>
    </section>
  );
};
