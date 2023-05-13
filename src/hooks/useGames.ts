import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (
    selectedGenre: string | null,
    selectedPlatform: Platform | null
) =>
    useData<Game>("/games", { params: { genres: selectedGenre, platforms: selectedPlatform?.id } }, [
        selectedGenre, selectedPlatform?.id
    ]);

export default useGames;
