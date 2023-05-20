import { Dropdown } from "flowbite-react";
import usePlatforms from "../hooks/usePlatforms";
import useGameQuery from "../store";


const PlatformSelector = () => {
    const { data, error } = usePlatforms();
    const selectedPlatform = useGameQuery(s => s.query.platform);
    const setSelectedPlatform = useGameQuery(s => s.setPlatform);

    if (error || !data) return null;
    return (
        <Dropdown label={selectedPlatform?.name || "Platforms"} color="dark">
            {data?.results.map(item => <Dropdown.Item key={item.id} onClick={() => {
                setSelectedPlatform(item);
            }}>{item.name}</Dropdown.Item>)}
        </Dropdown>
    );
};
export default PlatformSelector;
