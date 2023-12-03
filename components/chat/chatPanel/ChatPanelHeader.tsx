"use client";

import { useRef } from "react";
import SuperChats from "../superChat/SuperChats";
import { OpenSuperChatModal } from "@/hooks/useSuperChatModal";
import { IoIosArrowForward } from "react-icons/io";

interface ChatPanelHeaderProps {
  superChatsQueue: SuperChat[];
  openSuperChatModal: OpenSuperChatModal;
}

const ChatPanelHeader = ({
  superChatsQueue,
  openSuperChatModal,
}: ChatPanelHeaderProps) => {
  const superChatsRef = useRef<HTMLDivElement>(null);

  const onClickLeft = () => superChatsRef?.current?.scrollBy(-150, 0);

  const onClickRight = () => superChatsRef?.current?.scrollBy(150, 0);

  return (
    <div className="chat_panel_header relative space-y-4  border-b border-slate-600 p-6">
      <h2 className="text-xl">Top Chat</h2>

      {Boolean(superChatsQueue.length) && (
        <div
          ref={superChatsRef}
          className="scrollbar-hide flex max-w-lg gap-4 overflow-x-auto scroll-smooth "
        >
          <SuperChats
            superChats={superChatsQueue}
            openSuperChatModal={openSuperChatModal}
          />
        </div>
      )}

      {Boolean(superChatsQueue.length) && (
        <button
          className="scroll_button absolute left-2 top-16 flex h-10 w-10 rotate-180 items-center justify-center rounded-full bg-slate-700"
          onClick={() => onClickLeft()}
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      )}

      {Boolean(superChatsQueue.length) && (
        <button
          className="scroll_button absolute right-2 top-16 flex  h-10 w-10 items-center  justify-center rounded-full bg-slate-700"
          onClick={() => onClickRight()}
        >
          <IoIosArrowForward className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ChatPanelHeader;
