import React, { useContext } from "react";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PocketBase from "pocketbase";
import refreshContext from "../context/RefreshContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const refresher = useContext(refreshContext);

  const pb = new PocketBase("https://doctorhub.pockethost.io");

  const sendData = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(event.target);
    try {
      await pb.collection("docs").create(formData);
      navigate("/login");
      refresher((prev) => !prev);
    } catch (error) {
      console.log(error.response.data);
      navigate("/register");
    }
  };

  return (
    <section className="h-fit text-black flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <form onSubmit={sendData}>
          <select
            name="geschlecht"
            id="geschlecht"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          >
            <option value="">Geschlecht</option>
            <option value="Mann">Männlich</option>
            <option value="Frau">Weiblich</option>
          </select>

          <select
            name="title"
            id="title"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          >
            <option value="">Titel</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>

          <select
            name="fachgebiet"
            id="fachgebiet"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          >
            <option value="">Fachgebiet</option>
            <option value="Hausarzt">Hausarzt</option>
            <option value="Virologe">Virologe</option>
          </select>

          <input
            name="username"
            id="username"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Name"
          />
          <input
            name="email"
            id="email"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            id="password"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />

          <input
            name="passwordConfirm"
            id="passwordConfirm"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Confirm password"
          />

          <input
            name="avatar"
            id="avatar"
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="file"
            content="Avatar"
          />

          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-secondary hover:bg-primary px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an Account?
          <Link
            to={"/login"}
            className=" ml-1 text-primary hover:underline hover:underline-offset-4"
            href="#"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
