import Image from "next/image";
import Board from "../../../public/images/board.png";
import { Button } from "../_components/button";
import { Container } from "../_components/container";

export const Main = () => {
  return (
    <section className="py-14">
      <Container>
        <div className="bg-blue_ultra_light flex gap-11 px-14 py-12">
          <Image src={Board} alt="board" />

          <div>
            <h4 className="text-green_dark mb-2 pt-5 text-lg">
              Introducing Affiliate Template for Webflow
            </h4>
            <h2 className="mb-7 font-bitter text-5xl text-blue_dark">
              Easy-to-use Template for building Affiliate Sites
            </h2>
            <p className="text-gray_ultra_dark mb-6 text-lg leading-snug">
              <span className="font-bold">Affiliate</span> is a Webflow template
              made for entrepreneurs who want a professional and polished site
              ready to start and grow their affiliate marketing business in any
              niche.
            </p>

            <Button size="sm" green>
              Buy this Template
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
