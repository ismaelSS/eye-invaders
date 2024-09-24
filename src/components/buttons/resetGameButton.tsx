'use client'
import { useGameContext } from "../gameContext"

export default function ResetGameButton() {
  const {resetGame, scoreHistory} = useGameContext()
  return(
    <button 
      className="w-4/5 pt-3 pb-3 bg-amber-600 border-t-orange-700 
      border-r-orange-700 border-l-orange-300 border-b-orange-300 border-4
      active:border-t-orange-300 active:border-r-orange-300
      active:border-b-orange-700 active:border-l-orange-700 active:border-b-2 active:border-l-2 active:bottom-[-2px]" 
      onClick={resetGame}
    >
      {scoreHistory.length > 0 ? "Reiniciar" : "Iniciar"}
    </button>
  )
}