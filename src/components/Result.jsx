import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { winner, name, secondName } = location.state || {};

  const [players, setPlayers] = useState({ name: "", secondName: "" });

  useEffect(() => {
    setPlayers({
      name: localStorage.getItem("name") ?? "",
      secondName: localStorage.getItem("secondName") ?? "",
    });
  }, []);

  return (
    <div className="w-full  items-end h-[50%] mt-[50%] sm:mt-[10%] flex whitespace-nowrap  justify-center">
      <div className="flex relative w-full max-w-[720px] flex-1 flex-col items-center justify-center gap-8">
        <div className="flex w-full justify-center ">
          <h1 className="text-4xl sm:text-6xl md:text-[5vw] mb-8 text-[#00d4ff]">
            Winner is “
            {winner == "X"
              ? secondName ?? players.secondName
              : name ?? players.name}
            ”
          </h1>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();

            navigate("/Tic", {
              state: {
                name: players.name,
                secondName: players.secondName,
              },
            });
          }}
          className="reset cursor-pointer rounded-md bg-[#00d4ff] hover:bg-[#0c4653] px-8 py-3 text-lg sm:text-xl md:text-[2vw] font-bold text-[#0a0e27] transition focus:scale-95"
        >
          Replay
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("name");
            localStorage.removeItem("secondName");
            navigate("/");
          }}
          className="reset cursor-pointer rounded-md bg-[#00d4ff] hover:bg-[#0c4653] px-8 py-3 text-lg sm:text-xl md:text-[2vw] font-bold text-[#0a0e27] transition focus:scale-95"
        >
          Restart
        </button>
      </div>
        <p className="mt-6 text-sm sm:text-md text-[#f5fdff]  bottom-22 absolute sm:bottom-4 sm:left-1/2 sm:-translate-x-1/2"><a target="blank" className="text-blue-700" href="https://sohrabalefi.qzz.io/">About me /</a> version 1.0</p>
      
    </div>
  );
};

export default Result;
