import { useState } from "react";

export interface SuperChatModalState extends SuperChat {
  isOpen: boolean;
}

export type OpenSuperChatModal = ({ price, message }: SuperChat) => void;

export type CloseSuperChatModal = () => void;

const initialSuperChatModal: SuperChatModalState = {
  id: "",
  name: "",
  message: "",
  avatarSrc: "",
  isOpen: false,
  price: 0,
};

const useSuperChatModal = () => {
  const [superChatModal, setSuperChatModal] = useState<SuperChatModalState>(
    initialSuperChatModal
  );

  const openSuperChatModal = ({
    id,
    name,
    avatarSrc,
    price,
    message,
  }: SuperChat) =>
    setSuperChatModal({ id, name, avatarSrc, price, message, isOpen: true });

  const closeSuperChatModal: CloseSuperChatModal = () =>
    setSuperChatModal(initialSuperChatModal);

  return {
    superChatModal,
    openSuperChatModal,
    closeSuperChatModal,
  };
};

export default useSuperChatModal;
