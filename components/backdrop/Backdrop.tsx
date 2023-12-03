"use client";

import React from "react";
import clsx from "clsx";

interface BackdropProps {
  onClick: () => void;
  className?: string;
}

function Backdrop({ onClick, className }: BackdropProps) {
  return (
    <div
      onClick={() => onClick()}
      className={clsx(
        "absolute inset-0 left-0 top-0 cursor-pointer bg-slate-900 bg-opacity-80",
        className,
      )}
    />
  );
}

export default Backdrop;
