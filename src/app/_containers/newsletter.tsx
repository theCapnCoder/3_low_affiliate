import Image from "next/image";
import Mail from "../../../public/img/mail.jpg";
import { MailLarge } from "@/assets/svg";

export const Newsletter = () => {
  return (
    <section>
      <div className="flex gap-4">
        <Image src={Mail} alt="mail" />

        <div>
          <div className="flex gap-4">
            <MailLarge />
            <div>Newsletter Signup</div>
          </div>

          <div>
            Be the first to receive updates on articles, product reviews,
            courses, and more!
          </div>

          <input type="text" placeholder="Your email" />


          <div className="flex gap-4">
            <div>Submit</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </section>
  );
};
