import { Avatar, ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";
import getCroppedImageUrl from "../services/image-urls";
import { useState } from "react";

const GenreList = () => {
    const { data, error, isLoading } = useGenres();
    const [selectedGenra, setSelectedGenra] = useState(-1);

    if (error) <div></div>;

    return (
        <ListGroup>
            {isLoading && <GenreListSkeleton />}
            {data.length > 0 &&
                data.map((genre, index) => (
                    <ListGroup.Item
                        key={genre.id}
                        active={selectedGenra === index}
                        onClick={() => setSelectedGenra(index)}
                    >
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
