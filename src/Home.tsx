import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import NavBar from "./components/NavBar";
import Heading from "./components/Heading";
import { Genre } from "./services/genreService";
import { Platform } from "./services/platformService";


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
    searchText: string;
}

const Home = () => {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <div className="grid grid-rows-1">
            <div className="sticky top-0 z-50">
                <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="hidden lg:block sticky top-16 h-[calc(100vh-70px)] overflow-y-scroll overscroll-contain ">
                    <GenreList onSelect={(genre) => setGameQuery({...gameQuery, genre})} />
                </div>
                <div className="lg:col-span-4">
                    <div className="ml-2">
                        <Heading gameQuery={gameQuery} />
                    </div>
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
