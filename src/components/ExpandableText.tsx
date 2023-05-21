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
            <span>{isExpand? children : children.substring(0, minLength)}</span>
            <Button color={"warning"} onClick={() => setExpand(!isExpand)}>{isExpand? "Show Less" : "Show More"}</Button>
        </>
    );
};

export default ExpandableText;
