"use client";

import { OpenSuperChatModal } from "@/hooks/useSuperChatModal";
import clsx from "clsx";

interface SuperChatProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: SuperChat["id"];
  name: SuperChat["name"];
  price: SuperChat["price"];
  message: SuperChat["message"];
  avatarSrc: SuperChat["avatarSrc"];
  openSuperChatModal: OpenSuperChatModal;
  className?: string;
}

const PRICE_THRESHOLDS = {
  LOW: 100,
  MEDIUM: 1000,
  HIGH: 10000,
};

const getPriceLevelClassNameByPrice = (price: number) => {
  if (price >= PRICE_THRESHOLDS.LOW && price < PRICE_THRESHOLDS.MEDIUM)
    return "bg-yellow-400";
  if (price >= PRICE_THRESHOLDS.MEDIUM && price < PRICE_THRESHOLDS.HIGH)
    return "bg-sky-300";
  if (price >= PRICE_THRESHOLDS.HIGH) return "bg-pink-300";

  return "bg-green-400";
};

const SuperChat = ({
  id,
  name,
  price,
  message,
  avatarSrc,
  openSuperChatModal,
  className,
  ...props
}: SuperChatProps) => {
  const priceLevelClassName = getPriceLevelClassNameByPrice(price);

  return (
    <button
      className={clsx(
        "relative flex items-center gap-3 rounded-lg px-4 py-2",
        className,
        priceLevelClassName ? priceLevelClassName : "bg-slate-50",
      )}
      onClick={() =>
        openSuperChatModal({ id, name, price, message, avatarSrc })
      }
      {...props}
    >
      <div className="flex h-10  w-10  items-center justify-center rounded-full bg-slate-50">
        {avatarSrc}
      </div>
      <div className=" font-bold ">
        <h4 className="tracking-wide text-slate-800 ">{name}</h4>
        <div className="flex gap-1 break-words text-sm text-slate-600">
          <p>NT$</p>
          <p>{new Intl.NumberFormat().format(price)}</p>
        </div>
      </div>
    </button>
  );
};

export default SuperChat;
