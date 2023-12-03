import React from "react";
import { v4 } from "uuid";
import elon from "@/public/image/elon.jpg";
import ChatRoomMessage from "./chatRoom/ChatRoomMessage";
import zuckerberg from "@/public/image/zuckerberg.jpg";

const messages = [
  {
    id: v4(),
    src: elon.src,
    name: "Elon Musk",
    message: "Zuck v Musk fight will be live-streamed on 𝕏.",
  },
  {
    id: v4(),
    src: zuckerberg.src,
    name: "Zuckerberg",
    message: "Send Me Location",
  },
  {
    id: v4(),
    src: elon.src,
    name: "Elon Musk",
    message: "Vegas Octagon",
  },
  {
    id: v4(),
    src: elon.src,
    name: "Elon Musk",
    message:
      "I have this great move that I call “The Walrus”, where I just lie on top of my opponent & do nothing",
  },
  {
    id: v4(),
    src: zuckerberg.src,
    name: "Zuckerberg",
    message: "!!!",
  },
];

const ChatPanelChatRoom = () => {
  return (
    <div className="space-y-4 border-b border-slate-600 p-4 px-8">
      {messages.map((message) => (
        <ChatRoomMessage
          key={message.id}
          src={message.src}
          name={message.name}
          messgae={message.message}
        />
      ))}
    </div>
  );
};

export default ChatPanelChatRoom;
