import { Avatar, ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";
import getCroppedImageUrl from "../services/image-urls";

const GenreList = () => {
    const { data, error, isLoading } = useGenres();

    if (error) <div></div>;

    return (
        <ListGroup>
            {isLoading && <GenreListSkeleton />}
            {data.length > 0 &&
                data.map((genre) => (
                    <ListGroup.Item key={genre.id}>
                        <div className="flex gap-4 items-center font-bold">
                            <Avatar
                                img={getCroppedImageUrl(genre.image_background)}
                                rounded={true}
                                size="sm"
                            />
                            {genre.name}
                        </div>
                    </ListGroup.Item>
                ))}
        </ListGroup>
    );
};
export default GenreList;
