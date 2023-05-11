import { ListGroup } from "flowbite-react";
import useGames from "../hooks/useGames";


const GameGrid = () => {
    const { games, error } = useGames();

    return (
        <div className="w-48">
            <ListGroup>
                {error && <p className="text-red-600 font-bold text-xl">{error}</p>}
                {games.length !== 0 && games.map(game => <ListGroup.Item key={game.id}>{game.id}: {game.name}</ListGroup.Item>)}
            </ListGroup>
        </div>
    );
};

export default GameGrid;
