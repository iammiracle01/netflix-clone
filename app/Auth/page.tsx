"use client";
import Image from "next/image";
import Input from "../components/input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("Login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black md: bg-opacity-75 lg:bg-opacity-65 min-h-screen w-full flex flex-col justify-center items-center">
        <nav className="px-4 lg:px-12 w-full flex justify-center lg:justify-start">
          <div className="relative h-32 w-32">
            <Image src="/images/logo.png" fill alt="Logo" />
          </div>
        </nav>
        <div className="bg-black bg-opacity-70 p-10 lg:p-16 self-center m-2 rounded-lg w-full max-w-md">
          <h2 className="text-white text-3xl lg:text-4xl mb-8 font-semibold">
            {variant === "login" ? "Sign in" : "Register"}
          </h2>
          <div className="flex flex-col gap-4">
            {variant === "register" && (
              <Input
                label="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                id="username"
                value={name}
              />
            )}
            <Input
              label="Email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              id="email"
              type="email"
              value={email}
            />
            <Input
              label="Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              id="password"
              type="password"
              value={password}
            />
          </div>
          <button className="bg-red-600 py-3 text-white rounded-md w-full mt-6 lg:mt-10 hover:bg-red-700 transition">
            {variant === 'login' ? 'Login' : 'Sign up'}
          </button>
          <p className="text-neutral-500 mt-6 lg:mt-12 text-center">
            {
              variant === "login"
                ? "Don't have an account?"
                : "Already have an account?"
            }
            {" "}
            <span
              onClick={toggleVariant}
              className="text-white ml-1 hover:underline cursor-pointer">
              {variant === "login" ? "Sign up" : "Login"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
