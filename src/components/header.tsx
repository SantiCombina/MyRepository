import {MutableRefObject} from "react";

import {face} from "../assets";

import {headerTranslate} from "@/i18n/header-translates";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    headerRef: MutableRefObject<null>;
}

export function Header({headerRef}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const headerTranslated = headerTranslate[language];

    return (
        <header
            ref={headerRef}
            className="flex flex-col-reverse items-center justify-center w-full min-h-screen gap-2 py-10 md:gap-32 px-9 md:flex-row"
        >
            <div className="flex flex-col items-center justify-center gap-2 mt-7">
                <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] md:leading-[60px] text-center leading-[45px]">
                    {headerTranslated.title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] to-pink-600">
                        Santiago
                    </span>
                </h1>
                <div className="flex flex-col items-center gap-2">
                    <p className="text-[#DFD9FF] max-w-[550px] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center break-words">
                        {headerTranslated.bio}
                    </p>
                    <a
                        className="px-4 py-1 text-white transition-transform duration-300 bg-pink-600 rounded-md hover:scale-110 active:scale-100 active:bg-pink-800"
                        href={headerTranslated.resume_link}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {headerTranslated.resume_download}
                        <i className="pl-2 fa-light fa-file-arrow-down" />
                    </a>
                </div>
            </div>
            <img
                alt="face"
                className="rounded-full select-none w-60 h-60 md:h-80 md:w-80 animate-bounce"
                height={"320"}
                src={face}
                width={"323.64"}
            />
        </header>
    );
}
