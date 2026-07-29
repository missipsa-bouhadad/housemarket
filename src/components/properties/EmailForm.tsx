"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { IoSend } from "react-icons/io5";


interface InputValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function EmailForm() {
  const [values, setValues] = useState<InputValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };
  return (
    <div className="sticky rounded-2xl bg-white shadow-2xl p-6">
      <div className="flex gap-4 self-start">
        <Image
          src={"/images/avatar.png"}
          alt={"avatar"}
          width={50}
          height={50}
          className="rounded-full object-cover object-center"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold">Missipsa Bouhadad</h2>
          <p className="text-sm text-gray-400">Agent Property</p>
        </div>
      </div>

      <div className="flex flex-col mt-4 items-center justify-center gap-4">
        <Input
          id="contact-name"
          label="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <Input
          id="contact-email"
          label="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          id="contact-phone"
          label="phone"
          name="phone"
          value={values.phone}
          onChange={handleChange}
        />
        <Input
          id="contact-message"
          as="textarea"
          label="message"
          name="message"
          value={values.message}
          onChange={handleChange}
        />

        <Button variant="outline" fullWidth icon={<IoSend/>}>Send Email</Button>
      </div>
    </div>
  );
}
