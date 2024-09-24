'use client'
import { useGameContext } from "../gameContext";

export default function DifficultSelect() {
  const { gameDificultOptions, changeMode, mode } = useGameContext();

  return (
    <div className="flex flex-col gap-4">
      {gameDificultOptions.map((difficulty, index) => (
        <span key={index} className="flex gap-2">
          <div
            onClick={() => changeMode(difficulty)}
            className={`w-5 h-5 border-2 border-white cursor-pointer ${
              mode == difficulty ? 'bg-white' : ''
            }`}
          />
          {difficulty}
        </span>
      ))}
    </div>
  );
}
