import { Play } from "@/assets/svg";
import Card1 from "../../../public/img/card/card_1.jpg";
import Card2 from "../../../public/img/card/card_2.jpg";
import Card3 from "../../../public/img/card/card_3.jpg";
import Image from "next/image";

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
    <section className="text-blue_dark">
      <h2 className="font-bitter text-4xl">Latest Product Reviews</h2>

      <div className="flex gap-8">
        {cards.map((card, index) => (
          <div key={index} className="col-span-1">
            <Image src={card.img} alt={card.alt} />
            <h3 className="font-bitter text-3xl">{card.title}</h3>
            <p className="leading-snug">{card.text}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Play />
        <div>View all Product Reviews</div>
      </div>
    </section>
  );
};
