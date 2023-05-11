import { Button, Navbar } from "flowbite-react";
import logo from "./assets/logo.webp";
import DarkModeSwitcher from "./components/DarkModeSwitcher";
import GameGrid from "./components/GameGrid";

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

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block">
                    <Button color={"purple"}>Left Panel</Button>
                </div>
                <div>
                    <GameGrid></GameGrid>
                </div>
            </div>
        </div>
    );
};

export default Home;
