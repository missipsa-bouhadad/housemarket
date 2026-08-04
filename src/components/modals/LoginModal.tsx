"use client";

import { useAuthModal } from "@/store/useAuthModal";
import Modal from "./Modal";
import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { SignInWithGoogle } from "@/services/SignInWithGoogle";

interface InputValues {
  email: string;
  password: string;
}

type InputErrors = Partial<Record<keyof InputValues, string>>;

export default function LoginModal() {
  const router = useRouter();
  const { openRegister, closeLogin, isLogginOpen } = useAuthModal();
  const [values, setValues] = useState<InputValues>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<InputErrors>({});

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
    const newErrors: InputErrors = {};

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

    return Object.keys(newErrors).length === 0
  };

  const onSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(!validate()) return

    setLoading(true)

    try {
      const { error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });

      if(error){
        toast.error(error.message as string)
        return
      }

      toast.success("Login successful");
      router.refresh();

      setValues({ email: "", password: "" });
      closeLogin()

    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false)
    }
  } 

  return (
    <Modal title={"Login"} isOpen={isLogginOpen} onClose={closeLogin}>
      <div className="my-4">
        {/* header */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Welcome back</h2>
          <p className="text-sm text-gray-500">Login to your account</p>
        </div>

        {/* inputs */}
        <form onSubmit={onSubmit} className="space-y-6">
          <Input
            id="login-email"
            label="Email"
            name="email"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
            disabled={loading}
          />
          <Input
            id="login-password"
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
          onClick={SignInWithGoogle}
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
