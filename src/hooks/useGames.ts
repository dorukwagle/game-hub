import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/gameService";
import { GameQuery } from "../Home";
import { HOUR } from "./constants";


const useGames = (gameQuery: GameQuery) => {
    const config = {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
        },
    };

    return useQuery<Game[], Error>({
        queryKey: ["games", config.params],
        queryFn: () => gameService.getAll(config),
        cacheTime: HOUR,
        staleTime: HOUR
    })
}

export default useGames;
