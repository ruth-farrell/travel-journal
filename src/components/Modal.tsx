import type { MouseEvent, ReactNode } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal modal-open" onClick={handleBackdropClick}>
      <div className="modal-btn-container">
        <button className="round" onClick={onClose}>
          <FaXmark aria-hidden="true" />
          <span className="visually-hidden">Close Modal</span>
        </button>
      </div>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
