import { Facebook, Twitter, Instagram } from "@/assets/svg";
import Link from "next/link";

const cards = [
  { field1: "Secrets to Know About Hedge Trimming" },
  { field1: "How to Prep Your Lawn in the Spring" },
  { field1: "What to Do With a Dying Tree" },
];

const links = [
  "About",
  "Categories",
  "Tools",
  "Contact",
  "Privacy Policy",
  "Affiliate Disclosure",
];

const footerLinks = ["Licenses", "Style Guide", "Changelog"];

export const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
        <p>
          <span>Affiliate</span> is a Webflow template made for entrepreneurs
          who want a professional and polished site ready to start and grow
          their affiliate marketing business in any niche.
        </p>

        <div>
          {cards.map((card, index) => (
            <div key={index}>{card.field1}</div>
          ))}
        </div>

        <div>
          <div>Browse</div>

          <div>
            <input type="text" />
            <div>Search</div>
          </div>

          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href="#">{link}</Link>
              </li>
            ))}
          </ul>

          <hr />

          <div>©2022 Your Brand Name</div>
        </div>

        <hr />

        <div className="flex justify-between">
          <div>
            {footerLinks.map((link, index) => (
              <div key={index}>
                <Link href="#">{link}</Link>
              </div>
            ))}
          </div>

          <div>Powered by Designed. by Webflow Kevin Barrett</div>
        </div>
      </div>
    </footer>
  );
};
