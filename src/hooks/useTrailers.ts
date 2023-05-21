import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import ApiClient from "../services/api-client"

const useTrailers = (slug: string) => {
    const apiClient = new ApiClient<Trailer>(`/games/${slug}/movies`);

    return useQuery({
        queryKey: ["trailers", slug],
        queryFn: apiClient.getAll
    });
}

export default useTrailers;