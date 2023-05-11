import { Navbar, Button } from "flowbite-react";
import logo from "./assets/logo.webp";
import DarkModeSwitcher from "DarkModeSwitcher";

const Home = () => {
    return (
        <div className="grid grid-flow-row">
            <div >
                <Navbar fluid={true} rounded={true}>
                    <Navbar.Brand>
                        <img src={logo} className="h-9" />
                    </Navbar.Brand>
                    <div className="flex flex-col gap-4" id="toggle"></div>
                    <DarkModeSwitcher />
                </Navbar>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="hidden lg:block">
                    {Array.apply(0, Array(100)).map((item, index) => (
                        <p>{index}</p>
                    ))}
                </div>
                <div className="">
                    {Array.apply(5, Array(100)).map((item, index) => (
                        <p>--{index}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
