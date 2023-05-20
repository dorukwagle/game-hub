import { Card } from "flowbite-react";
import { Game } from "../services/gameService";
import getCroppedImageUrl from "../services/image-urls";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
      <div className="max-w-sm hover:scale-105 hover:duration-200 hover:ease-in">
        <Card key={game.id} imgSrc={getCroppedImageUrl(game.background_image)}>
            <div className="flex flex-wrap justify-between font-normal text-gray-500 dark:text-gray-400">
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/> 
                <CriticScore score={game.metacritic}/>              
            </div>  
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <div className="flex justify-between">
                    <Link to={"/games/" + game.slug} className="hover:text-gray-500">{game.name}</Link>
                <Emoji rating={game.rating_top}/></div>
            </h5>
        </Card>
      </div>
  );
}

export default GameCard;