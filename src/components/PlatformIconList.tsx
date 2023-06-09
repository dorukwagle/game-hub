import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { ReactElement } from "react";
import Platform from "../entities/Platform";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: ReactElement } = {
        pc: <FaWindows />,
        playstation: <FaPlaystation />,
        android: <FaAndroid />,
        linux: <FaLinux />,
        xbox: <FaXbox />,
        nintendo: <SiNintendo />,
        mac: <FaApple />,
        ios: <MdPhoneIphone />,
        web: <BsGlobe />,
    };

    return (
        <div className="flex gap-2">
            {platforms.map((platform) => (
                <span key={platform.id}>{iconMap[platform.slug]}</span>
            ))}
        </div>
    );
};
export default PlatformIconList;
