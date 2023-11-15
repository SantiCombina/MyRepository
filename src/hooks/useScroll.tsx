import {useEffect, useState} from "react";

interface Props {
    scrollSize: number;
}

export function useScroll({scrollSize}: Props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY >= scrollSize ? setIsVisible(true) : setIsVisible(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
    }, []);

    return {isVisible};
}
