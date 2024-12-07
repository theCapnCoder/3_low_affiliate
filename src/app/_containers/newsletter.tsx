import Image from "next/image";
import Mail from "../../../public/img/mail.jpg";
import { MailLarge } from "@/assets/svg";

export const Newsletter = () => {
  return (
    <section>
      <div className="flex gap-4">
        <Image src={Mail} alt="mail" />

        <div>
          <div className="flex items-center gap-4">
            <MailLarge />
            <h3 className="text-3xl">Newsletter Signup</h3>
          </div>

          <p className="text-lg leading-snug">
            Be the first to receive updates on articles, product reviews,
            courses, and more!
          </p>

          <input type="text" placeholder="Your email" />

          <div className="flex items-center gap-4">
            <button>Submit</button>
            <p className="text-sx">Privacy Policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
