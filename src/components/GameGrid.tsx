import React from "react";
import { GameQuery } from "../Home";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Button, Spinner } from "flowbite-react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, fetchNextPage, hasNextPage } =
        useGames(gameQuery);
    const skeletonArrya = [1, 2, 3, 4, 5, 6];

    if (error)
        return (
            <p className="text-red-600 dark:text-pink-700 font-bold text-xl">
                {error.message}
            </p>
        );

    const totalFetchedGames =
        data?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    return (
        <div className="">
            <InfiniteScroll
                dataLength={totalFetchedGames}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={<Spinner />}
                className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"
            >
                {/* <div className="p-2 grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4"> */}
                    {isLoading &&
                        skeletonArrya.map((s) => <GameCardSkeleton key={s} />)}
                    {data?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page.results.map((game) => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </React.Fragment>
                    ))}
                {/* </div> */}
            </InfiniteScroll>
        </div>
    );
};

export default GameGrid;
