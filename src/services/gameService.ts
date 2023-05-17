import { Platform } from "../services/platformService";
import ApiClient from "./api-client";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}


export default new ApiClient<Game>("/games");
