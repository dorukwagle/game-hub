import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetail";

const GameDetailPage = () => {
    const { slug } = useParams();
    const { data, isLoading, error} = useGameDetails(slug || "");

    if (error) return <div>{error.message}</div>;
    if (isLoading) return <p>Loading</p>
    return (
      <p>{data?.description_raw}</p>
    );
};
export default GameDetailPage;
