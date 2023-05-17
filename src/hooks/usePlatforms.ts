import { useQuery } from "@tanstack/react-query";
import platformService, { Platform } from "../services/platformService";
import { CACHE_KEY_PLATFORMS, ONE_DAY } from "./constants";



const usePlatforms = () => {
    return useQuery<Platform[], Error>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: platformService.getAll,
        staleTime: ONE_DAY,
        cacheTime: ONE_DAY,
    })
}

export default usePlatforms;