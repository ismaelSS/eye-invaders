'use client'
import { useGameContext } from "../gameContext"

export default function PersonHeader() {

  const {score, remainingTime} = useGameContext()
  return(
    <header className="flex flex-col-reverse justify-center items-center pt-3 pb-3 md:flex-row md:justify-around">
      <label>
        Pontuação:
        <span>
          {score}
        </span>
      </label>
      <label>
        Tempo:
        <span>
          {remainingTime}
        </span>
      </label>
      <span>ismaelSS</span>
    </header>
  )
}