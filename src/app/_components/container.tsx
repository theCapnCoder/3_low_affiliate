import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="mx-auto max-w-[1150px]">{children}</div>;
};
