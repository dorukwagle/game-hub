import { Dropdown } from "flowbite-react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    if (error) return null;
    return (
        <Dropdown label="Platforms" color="dark">
            {data.map(item => <Dropdown.Item key={item.id}>{item.name}</Dropdown.Item>)}
        </Dropdown>
    );
};
export default PlatformSelector;
