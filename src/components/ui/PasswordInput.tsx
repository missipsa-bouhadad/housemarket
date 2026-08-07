"use client";

import { ChangeEventHandler, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import Input from "./Input";

interface PasswordInputProps {
  id?: string;
  name: string;
  value: string;
  label: string;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function PasswordInput({
  id,
  name,
  value,
  label,
  error,
  disabled,
  autoComplete,
  onChange,
}: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative w-full">
      <Input
        id={id}
        name={name}
        value={value}
        label={label}
        error={error}
        disabled={disabled}
        autoComplete={autoComplete}
        onChange={onChange}
        type={visible ? "text" : "password"}
        className="pr-12"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        disabled={disabled}
        aria-label={visible ? "Hide password" : "Show password"}
        aria-pressed={visible}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-10 p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:text-primary"
      >
        {visible ? <LuEyeOff size={20} /> : <LuEye size={20} />}
      </button>
    </div>
  );
}
