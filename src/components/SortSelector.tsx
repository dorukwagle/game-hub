import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { Dropdown } from "flowbite-react";


interface Props {
    onSelect: (sortOrder: string) => void;
}

const SortSelector = ({ onSelect }: Props) => {
 const [selectedItem, setSelectedItem] = useState("");

 const menuItems = [
    {value: '', label: "Relevance"},
    {value: '-added', label: "Date Added"},
    {value: 'name', label: "Name"},
    {value: '-released', label: "Release Date"},
    {value: '-metacritic', label: "Popularity"},
    {value: '-rating', label: "Average Rating"}
 ];

 return (
     <Dropdown label={selectedItem || "Order by: Relevance"} color="dark">
         {menuItems.map((item) => (
             <Dropdown.Item
                 key={item.value}
                 onClick={() => {
                     setSelectedItem(item.label);
                     onSelect(item.value);
                 }}
             >
                 {item.label}
             </Dropdown.Item>
         ))}
     </Dropdown>
 );
}
export default SortSelector