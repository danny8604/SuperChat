import React from "react";
import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  clasName?: string;
}

const Card = ({ children }: CardProps) => {
  return <div className={clsx("rounded-lg")}>{children}</div>;
};

export default Card;
