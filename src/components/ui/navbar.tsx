import {MutableRefObject} from "react";

import {useScroll} from "../../hooks/useScroll";

interface Props {
    headerRef: MutableRefObject<null>;
    skillsRef: MutableRefObject<null>;
    projectsRef: MutableRefObject<null>;
    contactRef: MutableRefObject<null>;
}

export function Navbar({headerRef, skillsRef, projectsRef, contactRef}: Props) {
    const navStyle = "text-gray-300 hover:text-white text-xl font-medium cursor-pointer";

    const scrollToRef = (ref: MutableRefObject<null | HTMLElement>) => {
        return ref.current && ref.current.scrollIntoView({behavior: "smooth"});
    };

    const {isVisible} = useScroll({scrollSize: 64});

    return (
        <nav className="fixed top-0 z-20 flex items-center justify-center w-full h-16 px-6 sm:px-9 bg-primary">
            <div className="flex items-center justify-between w-full max-w-notebook">
                <span
                    className={`${
                        isVisible ? "opacity-0" : "opacity-1"
                    } text-white text-lg font-bold cursor-pointer flex gap-1`}
                    onClick={() => scrollToRef(headerRef)}
                >
                    Santiago Combina
                    <span className="hidden sm:block">| Frontend developer</span>
                </span>
                <ul className="flex-row hidden gap-10 list-none sm:flex">
                    <li className={navStyle} onClick={() => scrollToRef(headerRef)}>
                        Home
                    </li>
                    <li className={navStyle} onClick={() => scrollToRef(projectsRef)}>
                        Work
                    </li>
                    <li className={navStyle} onClick={() => scrollToRef(skillsRef)}>
                        Skills
                    </li>
                    <li className={navStyle} onClick={() => scrollToRef(contactRef)}>
                        Contact
                    </li>
                </ul>
            </div>
        </nav>
    );
}
