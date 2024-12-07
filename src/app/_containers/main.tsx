import Image from "next/image";
import Board from "../../../public/img/board.png";
import { Button } from "../_components/button";

export const Main = () => {
  return (
    <section className="py-16">
      <div className="bg-blue_ultra_light flex gap-11 py-12 px-14">
        <Image src={Board} alt="board" />

        <div>
          <h4 className="text-green_dark text-lg pt-5 mb-2">
            Introducing Affiliate Template for Webflow
          </h4>
          <h2 className="font-bitter text-5xl text-blue_dark mb-7">
            Easy-to-use Template for building Affiliate Sites
          </h2>
          <p className="text-gray_ultra_dark mb-6 text-lg leading-snug">
            <span className="font-bold">Affiliate</span> is a Webflow template
            made for entrepreneurs who want a professional and polished site
            ready to start and grow their affiliate marketing business in any
            niche.
          </p>

          <Button size="sm" green>Buy this Template</Button>
        </div>
      </div>
    </section>
  );
};
