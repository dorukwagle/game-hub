import { useInfiniteQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/gameService";
import { GameQuery } from "../Home";
import { HOUR } from "./constants";
import { FetchDataResponse } from "../services/api-client";

const useGames = (gameQuery: GameQuery) => {
        const params = {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
        };

    return useInfiniteQuery<FetchDataResponse<Game>, Error>({
        queryKey: ["games", params],
        queryFn: ({ pageParam = 1 }) => gameService.getAll({params: {...params, page: pageParam}}),
        cacheTime: HOUR,
        staleTime: HOUR,
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next? allPages.length + 1 : undefined;
        }
    });
};

export default useGames;
