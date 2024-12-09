import { PropsWithChildren } from "react";
import clsx from "clsx";

type Props = PropsWithChildren<{
  className?: string;
  green?: boolean;
  yellow?: boolean;
  gray?: boolean;
  size: "sm" | "md";
}>;

export const Button: React.FC<Props> = ({
  children,
  green,
  yellow,
  gray,
  size = "sm",
  className,
}) => {
  return (
    <button
      className={clsx(
        "rounded-md",
        {
          "p-4": size === "sm",
          "px-5 py-4": size === "md",
        },
        {
          "bg-green leading-snug text-white": green,
          "bg-yellow text-xs font-bold leading-relaxed": yellow,
          "bg-blue_gray rounded-l-none text-xs font-bold leading-relaxed text-white": gray,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
