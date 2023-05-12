import { Card } from "flowbite-react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-urls";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
      <div className="max-w-sm">
        <Card key={game.id} imgSrc={getCroppedImageUrl(game.background_image)}>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {game.name}
            </h5>
            <div className="flex flex-wrap justify-between font-normal text-gray-500 dark:text-gray-400">
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/> 
                <CriticScore score={game.metacritic}/>              
            </div>  
        </Card>
      </div>
  );
}

export default GameCard;