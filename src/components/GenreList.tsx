import { Avatar, ListGroup } from "flowbite-react";
import GenreListSkeleton from "./GenreListSkeleton";
import getCroppedImageUrl from "../services/image-urls";
import { useState } from "react"; 
import { Genre } from "../services/genreService";
import useGenres from "../hooks/useGenres";

interface Props {
    onSelect: (genre: Genre) => void;
}

const GenreList = ({ onSelect }: Props) => {
    const { data, error, isLoading } = useGenres();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    if (error || !data) return <div></div>;

    return (
        <>
            <p className="text-3xl ml-4 font-bold text-gray-900 dark:text-white">
                Genres
            </p>
            <ListGroup>
                {isLoading && <GenreListSkeleton />}
                {data.length > 0 &&
                    data.map((genre, index) => (
                        <ListGroup.Item
                            key={genre.id}
                            active={selectedIndex === index}
                            onClick={() => {
                                setSelectedIndex(index);
                                onSelect(genre);
                            }}
                        >
                            <div
                                className={
                                    "flex gap-4 items-center font-bold " +
                                    (selectedIndex === index ? "text-lg" : "")
                                }
                            >
                                <Avatar
                                    img={getCroppedImageUrl(
                                        genre.image_background
                                    )}
                                    rounded={true}
                                    size="sm"
                                />
                                {genre.name}
                            </div>
                        </ListGroup.Item>
                    ))}
            </ListGroup>
        </>
    );
};
export default GenreList;
