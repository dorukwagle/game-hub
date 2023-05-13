import { Navbar } from "flowbite-react";
import logo from "./assets/logo.webp";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const Home = () => {
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

    return (
        <div className="grid grid-rows-1">
            <div>
                <Navbar
                    fluid={true}
                    rounded={false}
                    className="bg-gray-300 rounded-bl-3xl rounded-br-3xl"
                >
                    <Navbar.Brand>
                        <img src={logo} className="h-9" />
                    </Navbar.Brand>
                    <DarkModeSwitcher />
                </Navbar>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="hidden lg:block">
                    <GenreList onSelect={(genre) => setSelectedGenre(genre)} />
                </div>
                <div className="lg:col-span-4">
                    <div className="ml-2">
                        <PlatformSelector onSelect={platform => setSelectedPlatform(platform)} />
                    </div>
                    <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}></GameGrid>
                </div>
            </div>
        </div>
    );
};

export default Home;
