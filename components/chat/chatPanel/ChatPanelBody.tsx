import {
  CloseSuperChatModal,
  SuperChatModalState,
} from "@/hooks/useSuperChatModal";
import ChatPanelChatRoom from "./ChatPanelChatRoom";
import SuperChatModal from "@/components/modal/SuperChatModal";
import ChatPanelSuperChatComposer from "./ChatPanelSuperChatComposer";

interface ChatPanelBodyProps {
  superChatModal: SuperChatModalState;
  closeSuperChatModal: CloseSuperChatModal;
  superChatsQueueEnqueue: (element: SuperChat) => void;
}

const ChatPanelBody = ({
  superChatModal,
  closeSuperChatModal,
  superChatsQueueEnqueue,
}: ChatPanelBodyProps) => {
  return (
    <div className="relative">
      <ChatPanelChatRoom />

      <ChatPanelSuperChatComposer enqueue={superChatsQueueEnqueue} />

      {superChatModal.isOpen && (
        <SuperChatModal
          superChatModal={superChatModal}
          closeSuperChatModal={closeSuperChatModal}
        />
      )}
    </div>
  );
};

export default ChatPanelBody;
