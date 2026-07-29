
import React, {
  ChangeEventHandler,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

interface BaseProps {
  as?: "input" | "textarea";
  name: string;
  value: string;
  label: string;
  error?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Input({
  id,
  as = "input",
  name,
  value,
  label,
  error,
  onChange,
  className,
  ...props
}: InputProps | TextareaProps) {
  const inputId = id ?? name;
  return (
    <div className="relative w-full">
      {as === "input" ? (
        <input
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          className={`peer h-14 px-4 py-2 rounded-xl transition-all ease-in-out duration-50 w-full outline-none border focus:border-2 disabled:opacity-70 ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"} ${className}`}
          {...(props as InputHTMLAttributes<HTMLInputElement>)}
        />
      ) : (
        <textarea
          id={inputId}
          name={name}
          value={value}
          onChange={onChange}
          className={`peer min-h-30 px-4 py-4 rounded-xl transition-all ease-in-out duration-50 w-full outline-none border focus:border-2 disabled:opacity-70 ${error ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-primary"} ${className}`}
          {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      )}

      <label
        htmlFor={inputId}
        className={`absolute top-4 left-4  text-gray-300 pointer-events-none origin-left ${value !== "" ? "scale-75 -translate-y-4 text-gray-700 transition-all ease-in-out" : ""}`}
      >
        {label}
      </label>

      {error && <p className="text-xs text-red-500 mt-2 ml-2">{error}</p>}
    </div>
  );
}
