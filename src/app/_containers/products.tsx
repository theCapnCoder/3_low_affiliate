import { Play } from "@/assets/svg";
import Card1 from "../../../public/img/card/card_1.jpg";
import Card2 from "../../../public/img/card/card_2.jpg";
import Card3 from "../../../public/img/card/card_3.jpg";
import Image from "next/image";
import { Container } from "../_components/container";

const cards = [
  {
    id: 1,
    img: Card1,
    alt: "card",
    title: "Lawnmower Xtreme",
    text: "This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.",
  },
  {
    id: 2,
    img: Card2,
    alt: "card",
    title: "Ultra Grow Fertilizer",
    text: "This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.",
  },
  {
    id: 3,
    img: Card3,
    alt: "card",
    title: "Hedge Clippers",
    text: "This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.",
  },
];

export const Products = () => {
  return (
    <section className="py-4 tracking-wider text-blue_dark">
      <Container>
        <h2 className="mb-8 font-bitter text-4xl">Latest Product Reviews</h2>

        <div className="mb-20 flex gap-10">
          {cards.map((card, index) => (
            <div key={index}>
              <Image src={card.img} alt={card.alt} className="mb-6" />

              <div className="pl-6">
                <h3 className="mb-3 font-bitter text-3xl">{card.title}</h3>
                <p className="text-[15px] leading-snug tracking-tight">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-1">
          <Play />
          <p className="tracking-wide">View all Product Reviews</p>
        </div>
      </Container>
    </section>
  );
};
