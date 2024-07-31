"use client";
import Image from "next/image";
import Input from "../../components/input";
import { useCallback, useState } from "react";
import axios from 'axios'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Auth = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/'
      });
      router.push('/')
    } catch (error) {
      console.log(error)
    }


  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post('/api/register', {
        email,
        name,
        password
      })
     login()
    } catch (error) {
      console.log(error)
    }


  }, [email, name, password, login]);


  return (
    <div className="relative min-h-screen w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black md:bg-opacity-65 lg:bg-opacity-50 min-h-screen w-full flex flex-col justify-center items-center">
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
                id="name"
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
          <button onClick={variant === 'login'? login : register } className="bg-red-600 py-3 text-white rounded-md w-full mt-6 lg:mt-10 hover:bg-red-700 transition">
            {variant === 'login' ? 'Login' : 'Sign up'}
          </button>
          <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
              <FcGoogle size={30}/>
            </div>
            <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
              <FaGithub size={30}/>
            </div>


          </div>
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
