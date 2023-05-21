import { Badge } from "flowbite-react";

interface Props {
    score: number;
}

const CriticScore = ({ score }: Props) => {
    const color = score > 75? "success" : score > 60? "warning" : score > 40 ? "gray" : "failure";
    return <Badge color={color} className="w-fit">{score}</Badge>;
};
export default CriticScore;
