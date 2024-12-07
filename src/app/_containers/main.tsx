import Image from "next/image";
import Board from "../../../public/img/board.jpg";

export const Main = () => {
  return (
    <section>
      <div className="flex gap-10">
        <Image src={Board} alt="board" />

        <div>
          <h4 className="text-green_dark text-lg">
            Introducing Affiliate Template for Webflow
          </h4>
          <h2 className="font-bitter text-5xl text-blue_dark">
            Easy-to-use Template for building Affiliate Sites
          </h2>
          <p className="text-gray_ultra_dark text-lg">
            <span className="font-bold">Affiliate</span> is a Webflow template
            made for entrepreneurs who want a professional and polished site
            ready to start and grow their affiliate marketing business in any
            niche.
          </p>

          <div>Buy this Template</div>
        </div>
      </div>
    </section>
  );
};
