import {MutableRefObject} from "react";

import {useScroll} from "../../hooks/useScroll";
import {Dropdown} from "../dropdown";

import {useLanguageStore} from "@/stores/language-store";
import {navbarTranslate} from "@/i18n/navbar-translates";

interface Props {
    headerRef: MutableRefObject<null>;
    skillsRef: MutableRefObject<null>;
    projectsRef: MutableRefObject<null>;
    contactRef: MutableRefObject<null>;
}

export function Navbar({headerRef, skillsRef, projectsRef, contactRef}: Props) {
    const navStyle = "text-gray-300 hover:text-white text-xl font-medium cursor-pointer";

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = navbarTranslate[language];

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
                    <span className="hidden sm:block">| {textTranslated.navbar_logo}</span>
                </span>
                <div className="flex gap-10">
                    <ul className="flex-row hidden gap-10 list-none sm:flex">
                        <li className={navStyle} onClick={() => scrollToRef(headerRef)}>
                            {textTranslated.navbar_sections.home}
                        </li>
                        <li className={navStyle} onClick={() => scrollToRef(projectsRef)}>
                            {textTranslated.navbar_sections.work}
                        </li>
                        <li className={navStyle} onClick={() => scrollToRef(skillsRef)}>
                            {textTranslated.navbar_sections.skills}
                        </li>
                        <li className={navStyle} onClick={() => scrollToRef(contactRef)}>
                            {textTranslated.navbar_sections.contact}
                        </li>
                    </ul>
                    <Dropdown
                        trigger={
                            <div className="flex items-center gap-1 text-gray-300">
                                <img
                                    alt="language icon"
                                    className="h-6 cursor-pointer hover:text-white"
                                    src="/language-icon.svg"
                                />
                                <span>{language.toLowerCase()}</span>
                            </div>
                        }
                    />
                </div>
            </div>
        </nav>
    );
}
