import { Logo, Mail } from "@/assets/svg";

const links = ["Categories", "Reviews", "Buying Guides", "Blog"];

export const Header = () => {
  return (
    <header>
      <Logo />
      <div>Pages</div>
      {links.map((link, index) => (
        <div key={index}>{link}</div>
      ))}

      <Mail />
      <div>Sign up</div>
    </header>
  );
};
