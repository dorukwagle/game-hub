import { Spinner } from "flowbite-react";
import { Navigate } from "react-router-dom";
import useTrailers from "../hooks/useTrailers";

interface Props {
    gameId: string;
}

const GameTrailer = ({ gameId }: Props) => {
    const { data, isLoading, error } = useTrailers(gameId);

    if (isLoading) return <Spinner />;
    if (error) throw error;
    const first = data?.results[0];

    return first ? (
        <div className="mt-3">
            <video className="" src={first.data[480]} poster={first.preview} controls
            >
                {first.name}
            </video>
        </div>
    ) : null;
};
export default GameTrailer;
