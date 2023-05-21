import { Platform } from "../services/platformService";
import ApiClient from "./api-client";
import { Genre } from "./genreService";

interface Publisher {
    id: number;
    name: string; 
}

export interface Game {
    id: number;
    name: string;
    slug: string;
    genres: Genre[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}


export default new ApiClient<Game>("/games");
