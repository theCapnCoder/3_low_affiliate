import Image from "next/image";
import Mail from "../../../public/img/mail.jpg";
import { MailLarge } from "@/assets/svg";
import { Button } from "../_components/button";

export const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="flex gap-14 bg-[url('/img/pattern_large.png')] p-12">
        <Image src={Mail} alt="mail" />

        <div>
          <div className="mb-8 flex items-center gap-3 pt-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
              <MailLarge />
            </div>
            <h3 className="text-3xl">Newsletter Signup</h3>
          </div>

          <p className="mb-5 text-lg leading-snug">
            Be the first to receive updates on articles, product reviews,
            courses, and more!
          </p>

          <input
            type="text"
            placeholder="Your email"
            className="mb-7 w-full p-4 placeholder:text-xs placeholder:text-blue_gray"
          />

          <div className="flex items-center gap-2">
            <Button yellow size="md">
              Submit
            </Button>
            <p className="text-green_dark text-xs">Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
