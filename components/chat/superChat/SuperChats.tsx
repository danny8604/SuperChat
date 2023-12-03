import React from "react";
import SuperChat from "./SuperChat";
import { OpenSuperChatModal } from "@/hooks/useSuperChatModal";

interface SuperChatsProps {
  openSuperChatModal: OpenSuperChatModal;
  superChats: SuperChat[];
}

const SuperChats = ({ superChats, openSuperChatModal }: SuperChatsProps) => {
  return (
    <>
      {superChats.map((superChat) => (
        <SuperChat
          key={superChat.id}
          id={superChat.id}
          name={superChat.name}
          price={superChat.price}
          message={superChat.message}
          avatarSrc={superChat.avatarSrc}
          openSuperChatModal={openSuperChatModal}
        />
      ))}
    </>
  );
};

export default SuperChats;
