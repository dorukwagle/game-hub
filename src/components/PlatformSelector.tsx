import { Dropdown } from "flowbite-react";
import usePlatforms from "../hooks/usePlatforms";
import { useState } from "react";
import { Platform } from "../hooks/useGames";


interface Props {
    onSelect: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelect }: Props) => {
    const { data, error } = usePlatforms();
    const [selectedItem, setSelectedItem] = useState("");

    if (error) return null;
    return (
        <Dropdown label={selectedItem || "Platforms"} color="dark">
            {data.map(item => <Dropdown.Item key={item.id} onClick={() => {
                setSelectedItem(item.name);
                onSelect(item);
            }}>{item.name}</Dropdown.Item>)}
        </Dropdown>
    );
};
export default PlatformSelector;
