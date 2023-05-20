import { Dropdown } from "flowbite-react";
import useGameQuery from "../store";


const SortSelector = () => {
 const sortOrder = useGameQuery(s => s.query.sortOrder);
 const setSortOrder = useGameQuery(s => s.setSortOrder);

 const menuItems = [
    {value: '', label: "Relevance"},
    {value: '-added', label: "Date Added"},
    {value: 'name', label: "Name"},
    {value: '-released', label: "Release Date"},
    {value: '-metacritic', label: "Popularity"},
    {value: '-rating', label: "Average Rating"}
 ];

 return (
     <Dropdown label={sortOrder || "Order by: Relevance"} color="dark">
         {menuItems.map((item) => (
             <Dropdown.Item
                 key={item.value}
                 onClick={() => {
                     setSortOrder(item.label);
                 }}
             >
                 {item.label}
             </Dropdown.Item>
         ))}
     </Dropdown>
 );
}
export default SortSelector