import { Navbar } from "flowbite-react";
import logo from "../assets/logo.webp";
import DarkModeSwitcher from "./DarkModeSwitcher";
import SearchBox from "./SearchBox";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <Navbar
            fluid={true}
            rounded={false}
            className="bg-gray-300 rounded-bl-3xl rounded-br-3xl"
        >
            <Navbar.Brand>
                <img src={logo} className="h-9" />
            </Navbar.Brand>
                <div className="w-1/2">
                    <SearchBox onSearch={onSearch}/>
                </div>
            <DarkModeSwitcher />
        </Navbar>
    );
};
export default NavBar;
