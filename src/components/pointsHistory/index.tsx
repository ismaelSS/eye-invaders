'use client'
import { useGameContext } from "../gameContext"

export default function PointsHistory() {
  const { scoreHistory } = useGameContext();
  
  return (
    <div className="flex flex-col ">
      <label htmlFor="scoreList">Histórico</label>
      {scoreHistory.length > 0 ? (
        <>
          <ul id="scoreList" className="flex flex-col-reverse max-h-32 overflow-x-scroll overflow-y-invisible">
            {scoreHistory.map((score, index) => (
              <li key={index}>{score}</li>
            ))}
          </ul>
        </>
      ) : '-'}
    </div>
  );
}
