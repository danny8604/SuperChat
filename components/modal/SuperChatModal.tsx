"use client";

import {
  CloseSuperChatModal,
  SuperChatModalState,
} from "@/hooks/useSuperChatModal";
import { getPriceLevelClassNameByPrice } from "@/utils/chat";
import clsx from "clsx";
import React from "react";
import Avatar from "../avatar/Avatar";
import Backdrop from "../backdrop/Backdrop";

interface SuperChatModalProps {
  className?: string;
  superChatModal: SuperChatModalState;
  closeSuperChatModal: CloseSuperChatModal;
}

const SuperChatModal = ({
  className,
  superChatModal,
  closeSuperChatModal,
}: SuperChatModalProps) => {
  const priceLevelClassName = getPriceLevelClassNameByPrice(
    superChatModal.price,
  );

  return (
    <>
      <div
        className={clsx(
          "absolute left-0 top-0 z-10 w-full rounded-2xl p-4",
          className,
        )}
      >
        <div
          className={clsx(
            "flex flex-col gap-4 rounded-2xl p-5 text-slate-800 ",
            priceLevelClassName && priceLevelClassName,
          )}
        >
          <div className="flex items-center gap-4 ">
            <Avatar src={superChatModal.avatarSrc} />
            <h4 className=" text-lg tracking-wide">{superChatModal.name}</h4>
          </div>
          <div className="break-words">
            <p>{superChatModal.message}</p>
          </div>
        </div>
      </div>

      <Backdrop onClick={closeSuperChatModal} />
    </>
  );
};

export default SuperChatModal;
