"use client";

import Image from "next/image";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { IoSend } from "react-icons/io5";
import toast from "react-hot-toast";
import axios from "axios";

interface InputValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface EmailFormProps {
  email: string;
  name: string;
  image: string;
  propertyTitle: string;
  propertyPrice: number;
}

export default function EmailForm({email,name,image,propertyTitle,propertyPrice}:EmailFormProps) {
  const [values, setValues] = useState<InputValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] =useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!values.email ||!values.name ||!values.phone ||!values.message){
      toast.error("all fields are required!")
      return;
    }

    try {
      setLoading(true);

      await axios.post("/api/send-email", {
        ownerName: name,
        ownerEmail:email,
        propertyTitle,
        propertyPrice,
        senderName:values.name,
        senderEmail:values.email,
        senderPhone:values.phone,
        senderMessage:values.message
      });

      toast.success('Message sent successfully')
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.log(error)
      toast.error("Failed to send email")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="sticky rounded-2xl bg-white shadow-2xl p-6">
      <div className="flex gap-4 self-start">
        <Image
          src={image}
          alt={"avatar"}
          width={50}
          height={50}
          className="rounded-full object-cover object-center"
        />
        <div className="flex flex-col">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm text-gray-400">Agent Property</p>
        </div>
      </div>

      <form
        onSubmit={sendEmail}
        className="flex flex-col mt-4 items-center justify-center gap-4"
      >
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

        <Button loading={loading} variant="outline" fullWidth icon={<IoSend />} type="submit">
          Send Email
        </Button>
      </form>
    </div>
  );
}
