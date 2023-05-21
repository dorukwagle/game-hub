import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES, ONE_DAY } from "./constants";
import ApiClient from "../services/api-client";
import { Genre } from "../entities/Genre";


const genreService = new ApiClient<Genre>("/genres");
const useGenres = () =>
    useQuery({
        queryKey: CACHE_KEY_GENRES,
        queryFn: genreService.getAll,
        staleTime: ONE_DAY,
        cacheTime: ONE_DAY,
    });

export default useGenres;
