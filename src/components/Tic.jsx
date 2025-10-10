import React, { useEffect, useState } from "react";
import Result from "./Result";
import { useLocation, useNavigate } from "react-router-dom";

const Tic = () => {
  const [player, setPlayer] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));

  const location = useLocation();
  const { name, secondName } = location.state || {};
  const navigate = useNavigate();





  useEffect(() => {
    if (!name || !secondName) {
      navigate("/", { replace: true });
    }
  }, [name, secondName, navigate]);

  const possibleHit = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleClick = (index) => {
    const newArr = [...board];
    if (newArr[index]) return;

    if (player) {
      newArr[index] = "O";
      setPlayer(false);
    } else {
      newArr[index] = "X";
      setPlayer(true);
    }
    setBoard(newArr);
  };

  const Winner = () => {
    for (let hit of possibleHit) {
      const [a, b, c] = hit;
      if (board[a] === board[b] && board[a] === board[c] && board[a] !== null) {
        navigate("/Result", {
          state: { winner: board[a], name, secondName },
          replace: true,
        });
        return board[a];
      }
    }
    return false;
  };

  const TheWinner = Winner();

  return (
    <div className="parent relative flex min-h-screen w-full flex-col items-center bg-[#0a0e27] px-4 py-8 sm:py-12 select-none">
      {!TheWinner ? (
        <div className="player flex w-full max-w-[720px] mt-20 flex-col items-center justify-center gap-6">
          <div className="flex w-full justify-center ">
            <h3 className="text-2xl sm:text-3xl text-[#00d4ff]">
              Player {player ? `${name}` : `${secondName}`} turn
            </h3>
          </div>

          <div className="board grid aspect-square w-full max-w-[360px] sm:max-w-[420px] grid-cols-3 gap-2 sm:gap-4 rounded-xl bg-[#1a1d3a] p-3 sm:p-5">
            {board.map((e, index) => (
              <button
                key={index}
                disabled={e !== null}
                onClick={() => handleClick(index)}
                className="btn flex aspect-square w-full items-center justify-center rounded-lg bg-[#00d4ff] text-5xl sm:text-6xl md:text-7xl font-bold leading-none text-[#0a0e27] transition disabled:cursor-not-allowed disabled:opacity-60 focus:scale-95"
              >
                {e}
              </button>
            ))}
          </div>
          <button
          onClick={() => {
            setBoard(Array(9).fill(null))
            setPlayer(null);
            // e.preventDefault();

            // navigate("/Tic", {
            //   state: {
            //     name: players.name,
            //     secondName: players.secondName,
            //   },
            // });
          }}
          className="reset cursor-pointer rounded-md bg-[#00d4ff] hover:bg-[#0c4653] px-8 py-3 text-lg sm:text-xl md:text-[2vw] font-bold text-[#0a0e27] transition focus:scale-95"
        >
          Replay
        </button>
        </div>
      ) : (
        <Result
          setBoard={setBoard}
          setPlayer={setPlayer}
          TheWinner={TheWinner}
          secondName={secondName}
          name={name}
        />
      )}
    </div>
  );
};

export default Tic;
