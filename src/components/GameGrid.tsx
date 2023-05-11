import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { ListGroup } from "flowbite-react";


interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient.get<FetchGamesResponse>("/games")
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message));
    },[]);
    console.log(games);
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
