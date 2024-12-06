import Image from "next/image";
import Board from "../../../public/img/board.jpg";

export const Main = () => {
  return (
    <section>
      <div className="flex gap-10">
        <Image src={Board} alt="board" />

        <div>
          <div>Introducing Affiliate Template for Webflow</div>
          <div>Easy-to-use Template for building Affiliate Sites</div>
          <div>
            Affiliate is a Webflow template made for entrepreneurs who want a
            professional and polished site ready to start and grow their
            affiliate marketing business in any niche.
          </div>

          <div>Buy this Template</div>
        </div>
      </div>
    </section>
  );
};
