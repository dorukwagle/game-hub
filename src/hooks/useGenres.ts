import useData from "./useData";


interface Genres {
    id: number;
    name: string;
    background_image: string;
}

const useGenres = () => useData<Genres>("/genres");

export default useGenres;