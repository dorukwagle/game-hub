import { GameQuery } from "../Home";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading } = useGames(gameQuery);
    const skeletonArrya = [1, 2, 3, 4, 5, 6];

    return (
        <div className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {isLoading && skeletonArrya.map((s) => <GameCardSkeleton key={s} />)}
            {error && <p className="text-red-600 dark:text-pink-700 font-bold text-xl">{error}</p>}
            {data.length !== 0 &&
                data.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
    );
};

export default GameGrid;
