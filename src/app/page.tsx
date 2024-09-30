import DifficultSelect from "@/components/difficultSelect";
import { GameContextProvider } from "@/components/gameContext";
import GameFrame from "@/components/gameFrame";
import PersonHeader from "@/components/personHeader";
import PoitsHistory from "@/components/pointsHistory";
import ScoreDescription from "@/components/pontuationDescription";

export default function Home() {
  return (
    <main>
      <GameContextProvider>
        <PersonHeader/>
        <div className="flex flex-row justify-around items-center flex-wrap gap-3 flex-1">
          <div className="flex flex-col gap-3">
            <PoitsHistory/>
            <ScoreDescription/>
          </div>
          <GameFrame/> 
          <DifficultSelect/>
        </div>
      </GameContextProvider>
    </main>
  );
}
