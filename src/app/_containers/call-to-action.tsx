import { Tools } from "@/assets/svg";

export const CallToAction = () => {
  return (
    <section>
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <Tools />
          <h3 className="font-bitter text-3xl">
            View our list of the best products in lawncare.
          </h3>
        </div>

        <div>See the list</div>
      </div>
    </section>
  );
};
