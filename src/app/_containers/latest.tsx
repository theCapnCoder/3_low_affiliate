import { Play } from "@/assets/svg";

const items = [
  "Secrets to Know About Hedge Trimming",
  "What to Do With a Dying Tree",
  "Which Flowers Should You Plant Garden",
];

export const Latest = () => {
  return (
    <section>
      <div>Latest from the Blog</div>

      <div className="grid grid-cols-2">
        <div className="row-span1 col-span-3">
          <div>How to Prep Your Lawn in the Spring</div>
          <div>
            This is the blog description text. This is the blog description
            text. This is the blog description text.
          </div>
        </div>

        <div>
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <Play />
        <div>View All Blog Articles</div>
      </div>
    </section>
  );
};
