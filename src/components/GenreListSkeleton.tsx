import { ListGroup } from "flowbite-react";

const GenreListSkeleton = () => {
    const styles: {[key: number]: string} = {
        11: "w-11/12",
        5: "w-5/12",
        9: "w-9/12",
        10: "w-10/12",
        4: "w-4/12",
        8: "w-8/12",
        6: "w-6/12",
        3: "w-5/6"
    };
    const listItems = [11, 5, 9, 10, 4, 8, 6, 3];

    return (
        <div className="shadow animate-pulse">
            <ListGroup>
                {listItems.map((item) => (
                    <ListGroup.Item key={item}>
                        <div
                            className={`rounded-full ${styles[item]} h-5 tracking-tight bg-gray-300 dark:bg-gray-600`}
                        ></div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};
export default GenreListSkeleton;
