import { ListGroup } from "flowbite-react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <div className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {error && <p className="text-red-600 font-bold text-xl">{error}</p>}
            {games.length !== 0 &&
                games.map((game) => <GameCard game={game} />)}
        </div>
    );
};

export default GameGrid;
