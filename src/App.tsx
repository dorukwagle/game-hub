import { Navbar } from "flowbite-react";
import logo from "./assets/logo.webp";
import DarkModeSwitcher from "./components/DarkModeSwitcher/DarkModeSwitcher";

function App() {
    return (
        <>
            <Navbar fluid={true} rounded={true}>
                <Navbar.Brand>
                    <img src={logo} className="h-9" />
                </Navbar.Brand>
                <div className="flex flex-col gap-4" id="toggle"></div>
                <DarkModeSwitcher />
            </Navbar>
        </>
    );
}

export default App;
