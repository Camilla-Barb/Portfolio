"use-client";

import { XMarkIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { FocusTrap } from "focus-trap-react";

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
      document.body.classList.add("overflow-hidden");
      setTimeout(() => {
        closeBtn.current?.focus();
      }, 100);
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <FocusTrap active={isOpen}>
      <div
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            onClose();
          }
        }}
        tabIndex={-1}
        className="modal-open fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden"
      >
        <motion.div
          className="bg-white h-full top-0 right-0 p-6 rounded-lg shadow-lg w-full fixed"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title && "modal-title"}
          aria-describedby={description && "modal-description"}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.2 }}
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
    </FocusTrap>
  );
};

export default Modal;
