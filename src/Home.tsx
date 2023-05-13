import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import NavBar from "./components/NavBar";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

const Home = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <div className="grid grid-rows-1">
            <div>
                <NavBar />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="hidden lg:block">
                    <GenreList onSelect={(genre) => setGameQuery({...gameQuery, genre})} />
                </div>
                <div className="lg:col-span-4">
                    <div className="ml-2 flex gap-2 mt-2 mb-2">
                        <PlatformSelector onSelect={platform => setGameQuery({...gameQuery, platform})} />
                        <SortSelector onSelect={sortOrder => setGameQuery({...gameQuery, sortOrder})}/>
                    </div>
                    <GameGrid gameQuery={gameQuery}></GameGrid>
                </div>
            </div>
        </div>
    );
};

export default Home;
