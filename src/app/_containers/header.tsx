import { Logo, Mail, Rectangle, Letter, OkClose, Cart } from "@/assets/svg";
import Link from "next/link";

const links = [
  {
    id: 1,
    svg: <Rectangle />,
    text: "Categories",
  },
  {
    id: 2,
    svg: <Letter />,
    text: "Blog",
  },
  {
    id: 3,
    svg: <OkClose />,
    text: "Reviews",
  },
  {
    id: 4,
    svg: <Cart />,
    text: "Buying Guides",
  },
];

export const Header = () => {
  return (
    <header className="flex items-center justify-between text-sm text-blue_dark">
      <div className="flex items-center gap-4">
        <Logo />
        <h4>Pages</h4>

        <nav>
          <ul className="flex items-center gap-4">
            {links.map((link, index) => (
              <div key={index} className="flex items-center gap-2">
                {link.svg}
                <Link href="/">{link.text}</Link>
              </div>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-4">
        <Mail />
        <div>Sign up</div>
      </div>
    </header>
  );
};
