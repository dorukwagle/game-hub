import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS, ONE_DAY } from "./constants";
import ApiClient from "../services/api-client";
import { Platform } from "../entities/Platform";

const platformService = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () => 
    useQuery({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: platformService.getAll,
        staleTime: ONE_DAY,
        cacheTime: ONE_DAY,
    })


export default usePlatforms;