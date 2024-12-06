import { Play } from "@/assets/svg";

const cards = [
  {
    field1: "Lawnmower Xtreme",
    field2:
      "This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.",
  },
  {
    field1:
      "This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.",
    field2: "Ultra Grow Fertilizer",
  },
  {
    field1: "Hedge Clippers",
    field2:
      "This is the Review Snippet. This is the Review Snippet. This is the Review Snippet. This is the Review Snippet.",
  },
];

export const Products = () => {
  return (
    <section>
      <div>Latest Product Reviews</div>

      <div className="flex gap-8">
        {cards.map((card, index) => (
          <div key={index}>
            <div>{card.field1}</div>
            <div>{card.field2}</div>
          </div>
        ))}
      </div>

      <div>
        <Play />
        <div>View all Product Reviews</div>
      </div>
    </section>
  );
};
