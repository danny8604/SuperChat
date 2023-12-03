"use client";

import useQueue from "@/hooks/useQueue";
import ChatPanelBody from "./ChatPanelBody";
import ChatPanelHeader from "./ChatPanelHeader";
import useSuperChatModal from "@/hooks/useSuperChatModal";

const ChatPanel = () => {
  const { queue: superChatsQueue, enqueue: superChatsQueueEnqueue } =
    useQueue<SuperChat>({});
  const { openSuperChatModal, superChatModal, closeSuperChatModal } =
    useSuperChatModal();

  return (
    <div className="w-[30rem] rounded-2xl  border border-slate-600">
      <ChatPanelHeader
        superChatsQueue={superChatsQueue}
        openSuperChatModal={openSuperChatModal}
      />
      <ChatPanelBody
        superChatModal={superChatModal}
        closeSuperChatModal={closeSuperChatModal}
        superChatsQueueEnqueue={superChatsQueueEnqueue}
      />
    </div>
  );
};

export default ChatPanel;
