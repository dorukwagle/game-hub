import { useQuery } from "@tanstack/react-query";
import Game from "../entities/Game";
import { ONE_DAY } from "./constants";
import ApiClient from "../services/api-client";

const gameService = new ApiClient<Game>("/games");

const useGameDetails = (id: number | string) =>
    useQuery<Game, Error>({
        queryKey: ["game", id],
        queryFn: () => gameService.get(id),
        staleTime: ONE_DAY,
        keepPreviousData: true,
    });

export default useGameDetails;
