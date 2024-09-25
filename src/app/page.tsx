import DifficultSelect from "@/components/difficultSelect";
import { GameContextProvider } from "@/components/gameContext";
import GameFrame from "@/components/gameFrame";
import PersonHeader from "@/components/personHeader";
import PoitsHistory from "@/components/pointsHistory";

export default function Home() {
  return (
    <main>
      <GameContextProvider>
        <PersonHeader/>
        <div className="flex flex-row justify-around items-center flex-wrap gap-3 flex-1">
          <PoitsHistory/>
          <GameFrame/> 
          <DifficultSelect/>
        </div>
      </GameContextProvider>
    </main>
  );
}
