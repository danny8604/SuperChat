"use client";

import { useRef } from "react";
import { v4 as uuidV4 } from "uuid";

interface ChatPanelSuperChatComposerProps {
  enqueue: (element: SuperChat) => void;
}

const ChatPanelSuperChatComposer = ({
  enqueue,
}: ChatPanelSuperChatComposerProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputMessageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    enqueue({
      id: uuidV4(),
      name: "Penguin",
      avatarSrc: "🐧",
      price: inputRef.current?.value ? +inputRef.current?.value : 0,
      message: inputMessageRef.current?.value || "",
    });

    if (inputRef.current && inputMessageRef.current) {
      inputRef.current.value = "";
      inputMessageRef.current.value = "";
    }
  };

  return (
    <form
      className="flex flex-col space-y-5 p-6 text-center"
      onSubmit={onSubmit}
    >
      <h3 className="text-lg font-medium">Send a Super Chat</h3>
      <div className="flex flex-col gap-4 rounded-2xl bg-green-400 p-4">
        <div className=" flex items-center gap-4 font-bold">
          <div className="flex h-10 w-10  items-center     justify-center rounded-full bg-slate-50">
            🐧
          </div>
          <div className="text-slate-800">Penguin</div>
        </div>
        <textarea
          ref={inputMessageRef}
          placeholder="Your messgae..."
          className="w-full resize-none rounded-xl bg-green-300 bg-none  p-2 font-medium text-slate-800  outline-none placeholder:text-slate-500  "
        />
      </div>
      <div className="flex justify-center gap-4  py-5  text-2xl">
        <div className="text-slate-300">$</div>
        <div className=" w-fit">
          <input
            ref={inputRef}
            type="number"
            required
            min={20}
            max={10000}
            maxLength={5}
            className="w-fit border-b-2 border-slate-500 bg-slate-900 bg-none text-center text-slate-50 outline-none"
          />
        </div>
        <div className="text-slate-300">TWD</div>
      </div>
      <button
        className="rounded-3xl bg-blue-500 p-3 text-slate-50"
        type="submit"
      >
        Buy and Send
      </button>
    </form>
  );
};

export default ChatPanelSuperChatComposer;
