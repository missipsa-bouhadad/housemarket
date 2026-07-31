"use client";

import { useAuthModal } from "@/store/useAuthModal";
import Modal from "./Modal";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";

interface InputValues {
  email: string;
  password: string;
}

type InputErros = Partial<Record<keyof InputValues, string>>;

export default function LoginModal() {
  const { openRegister, closeLogin, isLogginOpen } = useAuthModal();
  const [values, setValues] = useState<InputValues>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState<InputErros>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((oldValue) => ({
      ...oldValue,
      [name]: value,
    }));

    setErrors((oldValue) => ({
      ...oldValue,
      [name]: undefined,
    }));
  };

  const validate = () => {
    const newErrors: InputErros = {};

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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Modal title={"Login"} isOpen={isLogginOpen} onClose={closeLogin}>
      <div className="my-4">
        {/* header */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-sm text-gray-500">Login to your account</p>
        </div>

        {/* inputs */}
        <form className="space-y-6">
          <Input
            id="login-email"
            label="Email"
            name="Email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            disabled={loading}
          />
          <Input
            id="login-password"
            label="Password"
            name="Password"
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
            <div className="w-full border border-gray-300"></div>
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
            don&apos;t have an account ? <span className="text-primary font-semibold hover:underline hover:cursor-pointer" onClick={openRegister}>Register</span>
          </p>
        </div>
      </div>
    </Modal>
  );
}
