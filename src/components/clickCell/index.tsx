'use client';

import { useState } from "react";
import { tState, useGameContext } from "../gameContext";
import Image from "next/image";
import eyeDefaultImage from '@/app/assets/images/eyeDefault.png'
import eyeClickedImage from '@/app/assets/images/eyeDamage.png'
import slimeImage from '@/app/assets/images/slime.png'


interface iClickCell {
  state?: tState;
  addPoint: () => void;
  reducePoint: (quantity: number) => void;
}

export default function ClickCell({ state = 'neutral', addPoint, reducePoint }: iClickCell) {
  const { sortNewCell } = useGameContext();
  const [isClicked, setIsClicked] = useState(false);

  const onClickEvent = () => {
    if (isClicked) return; // Previne múltiplos cliques
    setIsClicked(true);

    switch (state) {
      case 'offensive':
        addPoint();
        break;

      case 'neutral':
        reducePoint(1);
        break;

      case 'passive':
        reducePoint(2);
        break;
    }

    sortNewCell();
    setTimeout(() => setIsClicked(false), 100); // Tempo de delay antes de permitir outro clique
  };


  const getImagePath = () => {
    if(state === 'offensive' && isClicked){
      return eyeClickedImage
    }else if(state === 'offensive' && isClicked === false){
      return eyeDefaultImage
    }else{
      return slimeImage
    }
  };

  const imagePath = getImagePath();

  return (
    <div
      onClick={onClickEvent}
      className={`w-24 h-24 bg-violet-400 flex justify-center items-center`}
    >
      {state !== 'neutral' &&
        <Image
          alt="enemy image"
          src={imagePath}
          height={60}
          width={60}
          className="pointer-events-none "
          style={{ userSelect: 'none' }}
        />
      }

    </div>
  );
}
