'use client';
import ResetGameButton from "../buttons/resetGameButton";
import ClickCell from "../clickCell";
import { useGameContext } from "../gameContext";

export default function GameFrame() {
  const { cellNumber, addPoint, removePoints, drawnCell, cellState, isPlay, remainingTime, gridNumber } = useGameContext();

  return (
    <div
    //aqui esta com estilos in-line pq o tailwind não recompila o grid dinamicamente
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${gridNumber}, 1fr)`,
        gridTemplateRows: `repeat(${gridNumber}, 1fr)`,
      }}
      className="bg-slate-100 gap-1 w-fit relative border-4"
    >
      {Array.from({ length: cellNumber }).map((_, index) => (
        <ClickCell
          key={index}
          addPoint={addPoint}
          reducePoint={removePoints}
          state={drawnCell === index ? cellState : 'neutral'}
        />
      ))}
      {!isPlay && remainingTime <= 0 && (
        <div className="absolute w-full h-full flex justify-center items-center">
          <ResetGameButton />
        </div>
      )}
    </div>
  );
}
