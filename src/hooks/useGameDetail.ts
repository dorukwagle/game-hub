import { useQuery } from "@tanstack/react-query";
import gameService, { Game } from "../services/gameService";
import { ONE_DAY } from "./constants";



const useGameDetails = (id: number | string) => 
    useQuery<Game, Error>({
        queryKey: ["game", id],
        queryFn: () => gameService.get(id),
        staleTime: ONE_DAY,
        keepPreviousData: true
    });

    export default useGameDetails;
