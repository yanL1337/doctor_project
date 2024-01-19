import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import Pocketbase from "pocketbase";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const pb = new Pocketbase("https://doctorhub.pockethost.io/");

  const sendData = async () => {
    setLoading(true);
    try {
      await pb
        .collection("docs")
        .authWithPassword(emailRef.current.value, passRef.current.value);
    } catch (error) {
      console.error("error login", error);
    }
    setLoading(false);
    navigate("/dashboard");

    //console.log(authData);
  };

  if (loading) return <Loading />;
  return (
    <>
      {/* <Navbar /> */}
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            alt="Sample image"
          />
        </div>

        <div className="md:w-1/3 max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign in with</label>
            <button
              type="button"
              className="mx-1 h-9 w-9  rounded-full bg-secondary hover:bg-primary text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <BiLogoFacebook
                size={20}
                className="flex justify-center items-center w-full "
              />
            </button>
            <button
              type="button"
              className="inlne-block mx-1 h-9 w-9 rounded-full bg-secondary hover:bg-primary uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiOutlineTwitter
                size={20}
                className="flex justify-center items-center w-full"
              />
            </button>
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>
          <input
            ref={emailRef}
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={passRef}
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />

          <div className="text-center md:text-left">
            <button
              onClick={sendData}
              className="mt-4 bg-secondary hover:bg-primary px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4  font-semibold text-sm text-slate-500 text-center md:text-left">
            Don&apos;t have an account?
            <Link
              to={"/register"}
              className="ml-1 text-primary hover:underline hover:underline-offset-4"
              href="#"
            >
              Register
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
