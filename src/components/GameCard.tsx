import { Card } from "flowbite-react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-urls";
import Emoji from "./Emoji";
import { Game } from "../services/gameService";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
      <div className="max-w-sm hover:scale-105 hover:duration-300">
        <Card key={game.id} imgSrc={getCroppedImageUrl(game.background_image)}>
            <div className="flex flex-wrap justify-between font-normal text-gray-500 dark:text-gray-400">
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/> 
                <CriticScore score={game.metacritic}/>              
            </div>  
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="flex justify-between">{game.name} <Emoji rating={game.rating_top}/></div>
            </h5>
        </Card>
      </div>
  );
}

export default GameCard;