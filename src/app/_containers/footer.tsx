import { Facebook, Instagram, Twitter } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import { LatestCards } from "./data";

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
    <footer className="text-blue_dark">
      <div className="flex justify-between">
        <div>
          <div className="flex gap-4">
            <Facebook />
            <Twitter />
            <Instagram />
          </div>

          <p className="max-w-[30ch] leading-tight">
            <span className="font-bold">Affiliate</span> is a Webflow template
            made for entrepreneurs who want a professional and polished site
            ready to start and grow their affiliate marketing business in any
            niche.
          </p>
        </div>

        <div>
          <h3 className="text-gray_ultra_dark font-bitter text-3xl">
            Latest Articles
          </h3>
          <div>
            {LatestCards.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image src={item.img} alt={item.alt} />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-gray_ultra_dark font-bitter text-3xl">Browse</h3>

          <div className="flex">
            <input type="text" />
            <div>Search</div>
          </div>

          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href="#" className="leading-tight">
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-px bg-gray_dark"></div>

          <p>©2022 Your Brand Name</p>
        </div>
      </div>

      <div className="h-px bg-gray_dark"></div>

      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          {footerLinks.map((link, index) => (
            <div key={index}>
              <Link href="#" className="text-xm">
                {link}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-sm">Powered by Designed. by Webflow Kevin Barrett</p>
      </div>
    </footer>
  );
};
