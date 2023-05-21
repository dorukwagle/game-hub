import { Spinner } from "flowbite-react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: string | number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId);
    if (error) throw error;
    if (isLoading) return <Spinner />;

    return (
        <div className="p-2 grid gap-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
            {data?.results.map((file) => (
                <img key={file.id} src={file.image} />
            ))}
        </div>
    );
};
export default GameScreenshots;
