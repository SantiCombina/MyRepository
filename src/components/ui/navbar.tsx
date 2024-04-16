import {Twirl as Hamburger} from "hamburger-react";
import {MutableRefObject, useState} from "react";

import {LanguageDropdown} from "../dropdown/language-dropdown";

import {LanguageSwitch} from "./language-switch";

import {useBreakpoint} from "@/hooks/useBreakpoint";
import {navbarTranslate} from "@/i18n/navbar-translates";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    headerRef: MutableRefObject<null>;
    skillsRef: MutableRefObject<null>;
    projectsRef: MutableRefObject<null>;
    contactRef: MutableRefObject<null>;
}

export function Navbar({headerRef, skillsRef, projectsRef, contactRef}: Props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navStyle = "text-gray-300 hover:text-white font-medium cursor-pointer";

    const breakpoint = useBreakpoint();
    const isMobile = breakpoint.is.sm || breakpoint.is.md;

    const language = useLanguageStore((state) => state.languageValue);
    const textTranslated = navbarTranslate[language];

    const scrollToRef = (ref: MutableRefObject<null | HTMLElement>) => {
        return ref.current && ref.current.scrollIntoView({behavior: "smooth"});
    };

    const menuLink = (ref: MutableRefObject<null>) => {
        scrollToRef(ref);
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 z-20 flex items-center justify-center w-full h-16 px-6 sm:px-9 bg-primary">
            <div className="flex items-center justify-between w-full max-w-notebook">
                <span
                    className={`${
                        isMobile ? "flex-col items-start leading-4" : "items-center"
                    } flex gap-1 text-lg font-bold text-white cursor-pointer`}
                    onClick={() => scrollToRef(headerRef)}
                >
                    Santiago Combina
                    <span className="text-sm md:text-lg">| {textTranslated.navbar_logo}</span>
                </span>
                <div className="flex gap-10">
                    {isMobile ? (
                        <Hamburger color="white" toggled={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
                    ) : (
                        <>
                            <ul className="flex flex-row gap-10 text-xl list-none">
                                <li
                                    className={navStyle}
                                    tabIndex={0}
                                    onClick={() => scrollToRef(headerRef)}
                                    onKeyDown={(e) => e.key === "Enter" && scrollToRef(headerRef)}
                                >
                                    {textTranslated.navbar_sections.home}
                                </li>
                                <li
                                    className={navStyle}
                                    tabIndex={0}
                                    onClick={() => scrollToRef(projectsRef)}
                                    onKeyDown={(e) => e.key === "Enter" && scrollToRef(projectsRef)}
                                >
                                    {textTranslated.navbar_sections.work}
                                </li>
                                <li
                                    className={navStyle}
                                    tabIndex={0}
                                    onClick={() => scrollToRef(skillsRef)}
                                    onKeyDown={(e) => e.key === "Enter" && scrollToRef(skillsRef)}
                                >
                                    {textTranslated.navbar_sections.skills}
                                </li>
                                <li
                                    className={navStyle}
                                    tabIndex={0}
                                    onClick={() => scrollToRef(contactRef)}
                                    onKeyDown={(e) => e.key === "Enter" && scrollToRef(contactRef)}
                                >
                                    {textTranslated.navbar_sections.contact}
                                </li>
                            </ul>
                            <LanguageDropdown
                                trigger={
                                    <div className="flex items-center text-xl text-gray-300">
                                        <img
                                            alt="language icon"
                                            className="h-6 cursor-pointer hover:text-white"
                                            height={"24"}
                                            src="/language-icon.svg"
                                            width={"24"}
                                        />
                                        {language.toLowerCase()}
                                    </div>
                                }
                            />
                        </>
                    )}
                </div>
                {isMobile && (
                    <ul
                        className={`${
                            menuOpen ? "h-screen pt-40" : "h-0"
                        } transition-all absolute left-0 top-16 w-screen bg-primary/95 overflow-hidden flex flex-col items-center justify-start gap-3 backdrop-blur-sm text-2xl`}
                    >
                        <li className={navStyle} onClick={() => menuLink(headerRef)}>
                            {textTranslated.navbar_sections.home}
                        </li>
                        <li className={navStyle} onClick={() => menuLink(projectsRef)}>
                            {textTranslated.navbar_sections.work}
                        </li>
                        <li className={navStyle} onClick={() => menuLink(skillsRef)}>
                            {textTranslated.navbar_sections.skills}
                        </li>
                        <li className={navStyle} onClick={() => menuLink(contactRef)}>
                            {textTranslated.navbar_sections.contact}
                        </li>
                        <li>
                            <LanguageSwitch />
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
