'use client';
import React, { createContext, useState, ReactNode, useEffect, useContext } from 'react';

interface iGameContext {
  score: number;
  remainingTime: number;
  scoreHistory: number[];
  mode: tMode;
  isPlay: boolean;
  changeMode: (chosenMode: tMode) => void;
  resetGame: () => void;
  cellNumber: number;
  addPoint: () => void;
  removePoints: (quantity: number) => void;
  sortNewCell: () => void;
  drawnCell: number;
  cellState: tState;
  gameDificultOptions:tMode[]
  gridNumber:number
}

type tMode = 'facil' |'normal' | 'dificil' | 'insano';
export type tState = 'offensive' | 'passive' | 'neutral';

const GameContext = createContext<iGameContext | undefined>(undefined);

export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [scoreHistory, setScoreHistory] = useState<number[]>([]);
  const [mode, setMode] = useState<tMode>('normal');
  const [cellNumber, setCellNumber] = useState<number>(9);
  const [drawnCell, setDrawnCell] = useState<number>(-1);
  const [cellState, setCellState] = useState<tState>('neutral');
  const [velocity, setVelocity] = useState(2000);
  const [timeToChange, setTimeToChange] = useState(2000);
  

  const gameParameters = {
    facil:{
      initialTime: 15,
      cellNumber: 4,
      velocity: 900,
    },
    normal: {
      initialTime: 30,
      cellNumber: 9,
      velocity: 700,
    },
    dificil:{
      initialTime: 45,
      cellNumber: 16,
      velocity: 500,
    },
    insano:{
      initialTime: 45,
      cellNumber: 25,
      velocity: 500,
    },
  };

  const gameDificultOptions = Object.keys(gameParameters) as tMode[]

  const gridNumber = Math.sqrt(cellNumber)

  const changeMode = (chosenMode: tMode) => {
    setMode(chosenMode);
  };

  const resetGame = () => {
    setIsPlay(true);
    if ( score !== 0 && scoreHistory.length === 0 || scoreHistory.length > 0)  setScoreHistory([...scoreHistory, score]);
    setScore(0);
    setDrawnCell(-1)
    setRemainingTime(gameParameters[mode].initialTime);
    setCellNumber(gameParameters[mode].cellNumber);
    setVelocity(gameParameters[mode].velocity)
  };

  const addPoint = () => {
    if (isPlay) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const removePoints = (quantity: number) => {
    if (isPlay) {
      setScore((prevScore) => prevScore - quantity);
    }
  };

  const sortCell = (): number => {
    const sortNumber = Math.floor(Math.random() * gameParameters[mode].cellNumber);
    if (sortNumber === drawnCell) {
      return sortCell();
    } else {
      return sortNumber;
    }
  };

  const sortNewCell = () => {
    const sortStateNumber = Math.random() * 10;
    if (sortStateNumber <= 1) {
      setCellState('passive');
      setTimeToChange(velocity);
    } else {
      setCellState('offensive');
      setTimeToChange(velocity);
    }
    setDrawnCell(sortCell());
  };

  useEffect(() => {
    if (remainingTime <= 0) {
      setIsPlay(false);
    }

    if (remainingTime <= 0 || !isPlay) return;

    const intervalId = setInterval(() => {
      setRemainingTime((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [remainingTime, isPlay]);

  useEffect(() => {
    if (remainingTime <= 0 || !isPlay) return;

    const intervalId = setInterval(() => {
      if (timeToChange > 0) {
        setTimeToChange((prevValue) => prevValue - 100);
      } else {
        sortNewCell();
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [isPlay, timeToChange, velocity]);

  return (
    <GameContext.Provider
      value={{
        score,
        remainingTime,
        scoreHistory,
        mode,
        isPlay,
        changeMode,
        resetGame,
        cellNumber,
        addPoint,
        removePoints,
        sortNewCell,
        drawnCell,
        cellState,
        gameDificultOptions,
        gridNumber
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }
  return context;
};
