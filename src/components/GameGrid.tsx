import React from "react";
import { GameQuery } from "../Home";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Button } from "flowbite-react";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useGames(gameQuery);
    const skeletonArrya = [1, 2, 3, 4, 5, 6];

    if (error)
        return (
            <p className="text-red-600 dark:text-pink-700 font-bold text-xl">
                {error.message}
            </p>
        );

    return (
        <>
            <div className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
                {isLoading &&
                    skeletonArrya.map((s) => <GameCardSkeleton key={s} />)}
                {data?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.map((game) => (
                            <GameCard key={game.id} game={game} />
                        ))}
                    </React.Fragment>
                ))}
            </div>

            { hasNextPage && 
                <Button color="dark" className="cursor-pointer mb-2 ml-2" 
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}>
                {isFetchingNextPage? "Loading..." : "Load More"}
            </Button>
            }
        </>
    );
};

export default GameGrid;
