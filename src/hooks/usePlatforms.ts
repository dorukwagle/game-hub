import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import { CACHE_KEY_PLATFORMS, ONE_DAY } from "./constants";



const usePlatforms = () => 
    useQuery({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: platformService.getAll,
        staleTime: ONE_DAY,
        cacheTime: ONE_DAY,
    })


export default usePlatforms;