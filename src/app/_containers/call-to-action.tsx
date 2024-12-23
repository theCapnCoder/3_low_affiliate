import { Tools } from "@/assets/svg";
import { Button } from "../_components/button";
import { Container } from "../_components/container";

export const CallToAction = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="flex items-center justify-between gap-4 bg-[url('/img/pattern_small.png')] p-7">
          <div className="flex items-center gap-3">
            <Tools className="h-12 w-12" />
            <h3 className="font-bitter text-3xl tracking-tight">
              View our list of the best products in lawncare.
            </h3>
          </div>

          <div className="pr-3">
            <Button size="sm" green>
              See the list
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
