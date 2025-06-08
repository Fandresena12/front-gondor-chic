import React from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      <div className="relative w-full max-w-2xl p-8 text-center text-white bg-black border rounded-lg shadow-lg ">
        <button
          onClick={onClose}
          className="absolute z-10 text-2xl text-white top-6 right-8"
        >
          <span className="font-serif font-thin">X</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default LoginModal;
