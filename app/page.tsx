"use client";

import ChatPanel from "@/components/chat/chatPanel/ChatPanel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center space-y-96  py-24 font-bold text-slate-50">
      <ChatPanel />
    </main>
  );
}
