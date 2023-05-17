import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import { CACHE_KEY_GENRES, ONE_DAY } from "./constants";

const useGenres = () =>
    useQuery({
        queryKey: CACHE_KEY_GENRES,
        queryFn: genreService.getAll,
        staleTime: ONE_DAY,
        cacheTime: ONE_DAY,
    });

export default useGenres;
