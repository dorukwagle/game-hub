import useGameQuery from "../store";


const Heading = () => {
    const platformName = useGameQuery(s => s.query.platform?.name);
    const genre = useGameQuery(s => s.query.genre?.name);

    const heading = `${platformName || ''} ${genre || ''} Games`;
    return (
        <p className="text-5xl font-bold text-gray-900 dark:text-white">
            {heading}
        </p>
    );
};
export default Heading;
