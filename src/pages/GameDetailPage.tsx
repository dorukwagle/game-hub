import { Spinner } from "flowbite-react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetail";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data, isLoading, error } = useGameDetails(slug || "");

    if (error) return <div>{error.message}</div>;
    if (isLoading) return <Spinner />;
    return (
        <div className="pl-2 pr-2">
            <h2 className="text-3xl mb-3 font-bold tracking-tight text-gray-900 dark:text-white">
                {data.name}
            </h2>

            <div className="text-md mb-3 tracking-tight text-gray-900 dark:text-white">
                <ExpandableText minLength={400}>
                    {data?.description_raw}
                </ExpandableText>
            </div>
            <GameAttributes game={data} />

            <GameTrailer gameId={data.slug} />
            <GameScreenshots gameId={data.slug} />
        </div>
    );
};
export default GameDetailPage;
