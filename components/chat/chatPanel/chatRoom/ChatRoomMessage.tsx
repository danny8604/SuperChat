import React from "react";
import Image from "next/image";

interface ChatRoomMessageProps {
  src: string;
  name: string;
  messgae: string;
}

const ChatRoomMessage = ({ src, name, messgae }: ChatRoomMessageProps) => {
  return (
    <div className="flex items-center gap-3 space-y-2">
      <Image
        src={src}
        alt="elon musk"
        width={40}
        height={40}
        className="h-12 w-12 rounded-full object-cover"
      />
      <div className="max-w-2xl">
        <span className=" text-slate-300">{name}</span>
        <span className=" px-2">{messgae}</span>
      </div>
    </div>
  );
};

export default ChatRoomMessage;
