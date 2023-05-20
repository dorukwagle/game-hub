import GameGrid from "../components/GameGrid";
import GenreList from "../components/GenreList";
import Heading from "../components/Heading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const Home = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="hidden lg:block sticky top-16 h-[calc(100vh-70px)] overflow-y-scroll overscroll-contain dark:scrollbar scrollbar-light">
                <GenreList />
            </div>
            <div className="lg:col-span-4">
                <div className="ml-2">
                    <Heading />
                </div>
                <div className="ml-2 flex gap-2 mt-2 mb-2">
                    <PlatformSelector />
                    <SortSelector />
                </div>
                <GameGrid />
            </div>
        </div>
    );
};

export default Home;
