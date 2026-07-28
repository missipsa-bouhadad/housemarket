"use client";

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import { FaHome } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  variant?: "solid" | "transparent";
}

export const navLinks = ["Home", "Properties", "MarketPlace"];

export default function Navbar({ variant = "transparent" }: NavbarProps) {
  const isTransparent = variant === "transparent";
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={clsx("top-0 left-0 z-50 w-full", {
        absolute: isTransparent,
        "sticky border-b border-white/70 bg-card": !isTransparent,
      })}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav
          className={clsx("flex justify-between items-center h-20", {
            "bg-primary rounded-3xl mt-5 pr-6 backdrop-blur-2xl border border-white/10":
              isTransparent,
          })}
        >
          {/* Logo */}
          <Link
            href={"/"}
            className={clsx(
              "relative z-10 h-12 w-18 md:h-13 md:w-20 lg:h-15 lg:w-22 ml-3 shadow-md overflow-hidden rounded-2xl transition-all duration-300",
              {
                "border border-primary/20": !isTransparent,
              },
            )}
          >
            <Image
              src="/images/logo.png"
              alt="Logo"
              fill
              className="object-cover object-center"
            />
          </Link>

          {/* Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `${item.toLowerCase()}`}
                className={clsx(
                  "font-semibold text-sm inline-block transition-all duration-300 ease-in-out hover:scale-120 hover:tracking-wide",
                  {
                    "text-white/90": isTransparent,
                    "text-primary/90": !isTransparent,
                  },
                )}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex gap-4 items-center">
            <Button variant={isTransparent ? "primary" : "outline"}>
              Login
            </Button>
            <Button
              variant={isTransparent ? "primary" : "outline"}
              icon={<FaHome />}
            >
              Add property
            </Button>
          </div>

          {/* Button of Mobile Menu */}
          <button
            className={clsx(
              "flex items-center justify-center rounded-2xl h-11 w-11 lg:hidden",
              {
                "bg-white text-primary border border-white/10": isTransparent,
                "bg-primary text-white border border-primary/10":
                  !isTransparent,
              },
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoClose size={24} /> : <HiOutlineMenuAlt3 size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`p-8 mt-4 rounded-3xl shadow-md lg:hidden ${isTransparent ? "bg-primary border border-white/10" : "mb-8 bg-white border border-white/90"}`}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `${item.toLowerCase()}`}
                  className={clsx(
                    "font-semibold text-sm inline-block transition-all duration-300 ease-in-out hover:scale-105 hover:tracking-wide",
                    {
                      "text-white/90": isTransparent,
                      "text-primary/90": !isTransparent,
                    },
                  )}
                >
                  {item}
                </Link>
              ))}

              <div className="flex flex-col gap-4 mt-2">
                <Button variant={isTransparent ? "primary" : "outline"}>
                  Login
                </Button>
                <Button
                  variant={isTransparent ? "primary" : "outline"}
                  icon={<FaHome />}
                >
                  Add property
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
