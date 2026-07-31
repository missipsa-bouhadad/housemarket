"use client";

import { useEffect } from "react";
import { LuX } from "react-icons/lu";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  title,
  isOpen = false,
  onClose,
  children,
}: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed z-50 inset-0 flex items-center justify-center transition-all duration-500 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* modal */}
      <div className={`relative z-10 bg-white rounded-2xl max-w-xl w-full p-6`}>
        {/* header */}
        <div className="flex items-center justify-between">
          <p className="font-semibold">{title}</p>
          <button
            onClick={onClose}
            className="p-3 rounded-full hover:bg-gray-300 cursor-pointer"
          >
            <LuX size={18} />
          </button>
        </div>

        {/* content */}
        <div className="p-6">
            {children}
        </div>
      </div>
    </div>
  );
}
