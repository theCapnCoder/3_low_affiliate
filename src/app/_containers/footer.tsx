import { Logo, Facebook, Instagram, Twitter } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../_components/container";
import { LatestFooterCards } from "./data";
import { Button } from "../_components/button";

const links = [
  "About",
  "Categories",
  "Tools",
  "Contact",
  "Privacy Policy",
  "Affiliate Disclosure",
];

const footerLinks = ["Style Guide", "Licenses", "Changelog"];

export const Footer = () => {
  return (
    <footer className="bg-off_white pt-20 text-blue_dark">
      <Container>
        <div className="mb-20 grid grid-cols-3 gap-10">
          <div>
            <Logo className="mb-2 h-16 w-44" />
            <div className="mb-5 flex">
              <Facebook className="h-10 w-10" />
              <Twitter className="h-10 w-10" />
              <Instagram className="h-10 w-10" />
            </div>

            <p className="max-w-[32ch] leading-tight">
              <span className="font-bold">Affiliate</span> is a Webflow template
              made for entrepreneurs who want a professional and polished site
              ready to start and grow their affiliate marketing business in any
              niche.
            </p>
          </div>

          <div>
            <h3 className="text-gray_ultra_dark mb-3 font-bitter text-3xl">
              Latest Articles
            </h3>
            <div className="flex flex-col gap-6">
              {LatestFooterCards.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[40%_60%] items-center gap-1"
                >
                  <div className="relative min-h-24">
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <p className="max-w-[20ch] leading-none">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-gray_ultra_dark mb-3 font-bitter text-3xl">
              Browse
            </h3>

            <div className="mb-4 flex w-full">
              <input type="text" className="grow rounded-l-md p-3" />
              <Button gray size="sm">
                Search
              </Button>
            </div>

            <ul className="mb-5 flex flex-col gap-1">
              {links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="leading-none">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mb-4 h-px bg-gray_dark"></div>

            <p>©2022 Your Brand Name</p>
          </div>
        </div>

        <div className="mb-5 h-px bg-gray_dark"></div>

        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-3">
            {footerLinks.map((link, index) => (
              <div key={index}>
                <Link href="#" className="text-xs">
                  {link}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-xs pt-2">
            Powered by Webflow . Designed by Kevin Barrett
          </p>
        </div>
      </Container>
    </footer>
  );
};
