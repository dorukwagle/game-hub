import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
    const { games, error, isLoading } = useGames();
    const skeletonArrya = [1, 2, 3, 4, 5, 6];

    return (
        <div className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {isLoading && skeletonArrya.map((s) => <GameCardSkeleton key={s} />)}
            {error && <p className="text-red-600 font-bold text-xl">{error}</p>}
            {games.length !== 0 &&
                games.map((game) => <GameCard key={game.id} game={game} />)}
        </div>
    );
};

export default GameGrid;
