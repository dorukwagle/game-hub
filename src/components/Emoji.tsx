import { Avatar, AvatarProps } from "flowbite-react";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";

interface Props {
    rating: number;
}

const Emoji = ({ rating }: Props) => {
    if (rating < 3) return null;
    const emojiMap: { [key: number]: AvatarProps } = {
        3: { img: meh, alt: "meh" },
        4: { img: thumbsUp, alt: "recommended" },
        5: { img: bullsEye, alt: "exceptional" },
    };

    return <Avatar {...emojiMap[rating]} rounded={true} size="sm" />;
};
export default Emoji;
