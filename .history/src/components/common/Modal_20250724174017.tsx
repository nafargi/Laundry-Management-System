// src/components/common/Modal.tsx
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
        aria-modal="true"
        role="dialog"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div
          className="bg-white rounded shadow-lg max-w-lg w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
        >
          {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
          {children}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Close modal"
          >
            &#x2715;
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
