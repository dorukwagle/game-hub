import { Card } from "flowbite-react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game: {id, name, background_image, parent_platforms} }: Props) => {
  return (
      <div className="max-w-sm">
        <Card key={id} imgSrc={background_image}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <div className="font-normal text-gray-500 dark:text-gray-400">
                <PlatformIconList platforms={parent_platforms.map(p => p.platform)}/>               
            </div>  
        </Card>
      </div>
  );
}

export default GameCard;