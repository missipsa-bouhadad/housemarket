"use client";

import { useAuthModal } from "@/store/useAuthModal";
import Modal from "./Modal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface InputValues {
  name: string;
  email: string;
  password: string;
}

type InputErrors = Partial<Record<keyof InputValues, string>>;

export default function RegisterModal() {
  const { openLogin, closeRegister, isRegisterOpen } = useAuthModal();
  const [values, setValues] = useState<InputValues>({
    name: "",
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState<InputErrors>({});
  const [loading, setLoading] = useState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: InputErrors = {};

    // validate name
    if (values.name.trim() === "") {
      newErrors.name = "Name is required !";
    } else {
      if (values.name.length < 3) {
        newErrors.email = "Name must be at least 3 characters !";
      }
    }

    // validate email
    if (values.email.trim() === "") {
      newErrors.email = "Email is required !";
    } else {
      if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        newErrors.email = "Please enter a valid email !";
      }
    }

    // validate password */
    if (values.password.trim() === "") {
      newErrors.password = "Password is required !";
    } else {
      if (values.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters !";
      }
    }
  };;

  return (
    <Modal title={"Register"} isOpen={isRegisterOpen} onClose={closeRegister}>
      <div className="my-4">
        {/* header */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Welcome to House Market</h2>
          <p className="text-sm text-gray-500">Create an account</p>
        </div>

        {/* inputs */}
        <form className="space-y-6">
          <Input
            id="register-name"
            label="Name"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
            disabled={loading}
          />
          <Input
            id="register-email"
            label="Email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            disabled={loading}
          />
          <Input
            id="register-password"
            label="Password"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            disabled={loading}
          />

          <Button
            variant="outline"
            loading={loading}
            fullWidth
            disabled={loading}
          >
            Continue
          </Button>
        </form>

        {/* divider */}
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center ">
            <div className="w-full border border-gray-300" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-gray-500">Or</span>
          </div>
        </div>

        {/* Gooogle Button */}
        <Button
          className="border border-gray-300"
          icon={<FcGoogle size={22} />}
          variant="primary"
          loading={loading}
          fullWidth
          disabled={loading}
        >
          Continue With Google
        </Button>

        {/* text */}
        <div className="flex justify-center mt-6 text-gray-400">
          <p>
            have an account ?{" "}
            <span
              className="text-primary font-semibold hover:underline hover:cursor-pointer"
              onClick={openLogin}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </Modal>
  );
}
