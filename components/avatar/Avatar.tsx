import React from "react";
import clsx from "clsx";

interface AvatarProps {
  src: string;
  className?: string;
}

const Avatar = ({ src, className }: AvatarProps) => {
  return (
    <div
      className={clsx(
        "flex h-10 w-10 items-center justify-center rounded-full bg-slate-50",
        className,
      )}
    >
      {src}
    </div>
  );
};

export default Avatar;
