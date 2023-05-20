import { useInfiniteQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/gameService";
import { ONE_DAY } from "./constants";
import { FetchDataResponse } from "../services/api-client";
import useGameQuery from "../store";

const useGames = () => {
    const gameQuery = useGameQuery((s) => s.query);

    const params = {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
    };

    return useInfiniteQuery<FetchDataResponse<Game>, Error>({
        queryKey: ["games", params],
        queryFn: ({ pageParam = 1 }) =>
            gameService.getAll({ params: { ...params, page: pageParam } }),
        staleTime: ONE_DAY,
        retry: 3,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });
};

export default useGames;
