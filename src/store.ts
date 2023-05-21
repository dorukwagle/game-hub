import { create } from "zustand";
import Genre from "./entities/Genre";
import Platform from "./entities/Platform";

interface GameQuery {
    genre?: Genre;
    platform?: Platform;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    query: GameQuery;
    setPlatform: (platform: Platform) => void;
    setGenre: (genre: Genre) => void;
    setSortOrder: (sortOrder: string) => void;
    setSearchText: (searchText: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
    query: {},
    setPlatform: (platform) =>
        set((store) => ({ query: { ...store.query, platform } })),
    setGenre: (genre) => set((store) => ({ query: { ...store.query, genre } })),
    setSortOrder: (sortOrder) =>
        set((store) => ({ query: { ...store.query, sortOrder } })),
    setSearchText: (searchText) => set(() => ({ query: { searchText } })),
}));

export default useGameQuery;
