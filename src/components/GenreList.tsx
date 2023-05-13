import { Avatar, ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres";
import GenreListSkeleton from "./GenreListSkeleton";
import getCroppedImageUrl from "../services/image-urls";
import { useState } from "react";

interface Props {
    onSelect: (genre: string) => void;
}

const GenreList = ({ onSelect }: Props) => {
    const { data, error, isLoading } = useGenres();
    const [selectedIndex, setSelectedIndex] = useState(-1);

    if (error) <div></div>;

    return (
        <ListGroup>
            {isLoading && <GenreListSkeleton />}
            {data.length > 0 &&
                data.map((genre, index) => (
                    <ListGroup.Item
                        key={genre.id}
                        active={selectedIndex === index}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelect(genre.slug);
                        }}
                    >
                        <div
                            className={
                                "flex gap-4 items-center font-bold " +
                                (selectedIndex === index
                                    ? "text-lg"
                                    : "")
                            }
                        >
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
