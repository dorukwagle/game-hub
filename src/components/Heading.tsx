import { GameQuery } from "../Home";

interface Props {
    gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`;
    return (
        <p className="text-5xl font-bold text-gray-900 dark:text-white">
            {heading}
        </p>
    );
};
export default Heading;
