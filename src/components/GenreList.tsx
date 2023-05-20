import { Avatar, ListGroup } from "flowbite-react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-urls";
import useGameQuery from "../store";
import GenreListSkeleton from "./GenreListSkeleton";


const GenreList = () => {
    const { data, error, isLoading } = useGenres();
    const selectedGenreId = useGameQuery(s => s.query.genre?.id);
    const setSelectedGenre = useGameQuery(s => s.setGenre);

    if (error) return <div></div>;

    return (
        <>
            <p className="text-3xl ml-4 font-bold text-gray-900 dark:text-white">
                Genres
            </p>
            <ListGroup>
                {isLoading && <GenreListSkeleton />}
                {data?.results.map((genre) => (
                    <ListGroup.Item
                        key={genre.id}
                        active={selectedGenreId === genre.id}
                        onClick={() => {
                            setSelectedGenre(genre);
                        }}
                    >
                        <div
                            className={
                                "flex gap-4 items-center font-bold " +
                                (selectedGenreId === genre.id ? "text-lg" : "")
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
        </>
    );
};
export default GenreList;
