import { Button, Navbar } from "flowbite-react";
import logo from "./assets/logo.webp";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const Home = () => {
    return (
        <div className="grid grid-rows-1">
            <div>
                <Navbar fluid={true} rounded={false} className="bg-gray-300 rounded-bl-3xl rounded-br-3xl">
                    <Navbar.Brand>
                        <img src={logo} className="h-9" />
                    </Navbar.Brand>
                    <DarkModeSwitcher />
                </Navbar>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="hidden lg:block">
                    <GenreList />
                </div>
                <div className="lg:col-span-4">
                    <GameGrid></GameGrid>
                </div>
            </div>
        </div>
    );
};

export default Home;