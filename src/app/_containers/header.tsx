import { Logo, Mail, Rectangle, Letter, OkClose, Cart } from "@/assets/svg";
import Link from "next/link";
import { Container } from "../_components/container";

const links = [
  {
    id: 1,
    svg: <Rectangle className="h-5 w-5" />,
    text: "Categories",
  },
  {
    id: 2,
    svg: <Letter className="h-5 w-5" />,
    text: "Blog",
  },
  {
    id: 3,
    svg: <OkClose className="h-5 w-5" />,
    text: "Reviews",
  },
  {
    id: 4,
    svg: <Cart className="h-5 w-5" />,
    text: "Buying Guides",
  },
];

export const Header = () => {
  return (
    <header className="text-sm text-blue_dark">
      <Container>
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-6">
            <Logo className="h-16 w-40" />
            <h4>Pages</h4>

            <nav>
              <ul className="flex items-center gap-6 ml-6">
                {links.map((link, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {link.svg}
                    <Link href="/">{link.text}</Link>
                  </div>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mr-3 flex items-center gap-2">
            <Mail className="h-10 w-10" />
            <div>Sign up</div>
          </div>
        </div>
      </Container>
    </header>
  );
};
