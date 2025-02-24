"use-client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  description,
}: ModalProps) => {
  const closeBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeBtn.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
        }
      }}
      tabIndex={-1}
      className="modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <motion.div
        className="bg-white h-screen top-0 left-0 p-6 rounded-lg shadow-lg max-w-lg w-full relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title && "modal-title"}
        aria-describedby={description && "modal-description"}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        exit={{ opacity: 0, scale: 0.95 }}
      >
        <button
          className="w-8 absolute top-4 right-4 z-10"
          ref={closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <XMarkIcon />
        </button>
        {title && (
          <h2 className="sr-only" id="modal-title">
            {title}
          </h2>
        )}
        {description && (
          <p className="sr-only" id="modal-description">
            {description}
          </p>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default Modal;
