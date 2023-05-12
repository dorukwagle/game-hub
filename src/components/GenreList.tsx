import { ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
    const { data, error, isLoading } = useGenres();
    if (error) return;
    return (
        <ListGroup>
            {isLoading && <GenreListSkeleton />}
            {data.length > 0 &&
                data.map((genre) => (
                    <ListGroup.Item key={genre.id}>{genre.name}</ListGroup.Item>
                ))}
        </ListGroup>
    );
};
export default GenreList;
