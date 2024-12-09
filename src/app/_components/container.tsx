import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("mx-auto max-w-[1150px]", className)}>{children}</div>
  );
};
