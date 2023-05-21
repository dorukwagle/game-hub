import { Button } from "flowbite-react";
import { useState } from "react";

interface Props {
    children: string;
    minLength?: number;
}

const ExpandableText = ({ children, minLength = 300 }: Props) => {
    const [isExpand, setExpand] = useState(false);

    if (children.length <= 300) return <span>{children}</span>;

    return (
        <>
            <div>
                <span>
                    {isExpand
                        ? children
                        : children.substring(0, minLength) + "..."}
                </span>
                <button
                    type="button"
                    className="text-white font-bold bg-yellow-400 hover:bg-yellow-500 focus:outline-none outline-none rounded-xl text-sm px-2 py-1 text-center mr-2 mb-2 mx-1 "
                    onClick={() => setExpand(!isExpand)}
                >
                    {isExpand ? "Show Less" : "Show More"}
                </button>
            </div>
        </>
    );
};

export default ExpandableText;
