import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const [warningVisible, setWarningVisible] = useState(false);
  const [warningActive, setWarningActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedSecondName = localStorage.getItem("secondName");

    if (savedName) setName(savedName);
    if (savedSecondName) setSecondName(savedSecondName);
  }, []);

  const handleEmptyInput = () => {
    if (!name || !secondName) {
      setWarningVisible(true);
      requestAnimationFrame(() => setWarningActive(true));
      return;
    }
    localStorage.setItem("name", name);
    localStorage.setItem("secondName", secondName);
    navigate("/Tic", { state: { name, secondName } });
  };

  useEffect(() => {
    if (!warningVisible) return;
    const hideTimer = setTimeout(() => setWarningActive(false), 2500);
    const removeTimer = setTimeout(() => setWarningVisible(false), 3000);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, [warningVisible]);

  return (
    <div className="parent relative flex min-h-screen w-full flex-col items-center bg-[#0a0e27] px-4 py-8 sm:py-12  select-none">
      <h1 className="text-[#00d4ff]  text-[5vw] whitespace-nowrap sm:text-4xl mb-10">
        Welcome to the Innovators.tech
      </h1>
      
       

      <form
        action=""
        className="flex flex-col  gap-4 w-full justify-center items-center"
      >
        <div className="w-full max-w-[300px] sm:max-w-[50vw] items-center relative justify-between">
          <input
            required
            value={value}
            type="text"
            placeholder="Enter 1nd player name..."
            onChange={(e) => {
              setName(e.target.value);
              setValue(e.target.value);
            }}
            className="py-4 px-6 w-full max-w-[300px] sm:max-w-[50vw] outline-none border border-[#00d4ff] text-white rounded-md "
          />
          {value ? (
            <i
              onClick={() => {
                setName("");
                setValue("");
              }}
              class="ri-close-circle-line text-[#00d4ff] absolute top-[20%] right-4 text-[6vw] cursor-pointer hover:text-[#29484e] sm:text-[1.4vw]"
            ></i>
          ) : null}
        </div>
        <div className="w-full max-w-[300px] sm:max-w-[50vw] items-center relative justify-between">
          <input
            required
            value={value2}
            type="text"
            placeholder="Enter 2nd player name..."
            onChange={(e) => {
              setSecondName(e.target.value);
              setValue2(e.target.value);
            }}
            className="py-4 px-6 w-full max-w-[300px] sm:max-w-[50vw] border outline-none border-[#00d4ff] text-white rounded-md "
          />
          {value2 ? (
            <i
              onClick={() => {
                setSecondName("");
                setValue2("");
              }}
              class="ri-close-circle-line text-[#00d4ff] absolute top-[20%] right-4 text-[6vw] cursor-pointer hover:text-[#29484e] sm:text-[1.4vw]"
            ></i>
          ) : null}
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            handleEmptyInput();
          }}
          className="bg-[#00d4ff] hover:bg-[#4cbed4] transition-all duration-300 ease-in-out py-4 px-10 w-full max-w-[300px] sm:max-w-[50vw] rounded-md font-medium sm:text-2xl cursor-pointer"
        >
          Begin
        </button>
        <div
          className={`bg-[#00d4ff] py-2 px-4 max-w-[300px] sm:max-w-[50vw] rounded-md transition-all duration-500 ease-out transform ${
            warningActive
              ? "opacity-100 translate-y-2"
              : "opacity-0 -translate-y-6 pointer-events-none"
          } ${warningVisible ? "" : "hidden"}`}
        >
          Please write the player names
        </div>
      </form>
      <p className="mt-6 text-sm sm:text-md text-[#f5fdff]  bottom-44 absolute sm:bottom-32 sm:left-1/2 sm:-translate-x-1/2"><a target="blank" className="text-blue-700" href="https://sohrabalefi.qzz.io/">About me /</a> version 1.0</p>
      
    </div>
  );
};

export default Home;
