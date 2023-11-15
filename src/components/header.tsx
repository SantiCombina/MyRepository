import {MutableRefObject} from "react";

import {face} from "../assets";

interface Props {
    headerRef: MutableRefObject<null>;
}

export function Header({headerRef}: Props) {
    return (
        <header
            ref={headerRef}
            className="flex flex-col-reverse items-center justify-center w-full h-screen gap-32 px-9 md:flex-row"
        >
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] text-center leading-[60px]">
                    Hi, I&apos;m <span className="text-[#915eff]">Santiago</span>
                </h1>
                <p className="text-[#DFD9FF] max-w-[550px] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 pb-3 text-center break-words">
                    I develop 3D websites, user interfaces and web applications
                </p>
                <a
                    className="px-4 py-1 text-white transition-transform duration-300 bg-pink-600 rounded-md hover:scale-110 active:scale-100 active:bg-pink-800"
                    href=""
                >
                    Resume
                    <i className="pl-2 fa-light fa-file-arrow-down" />
                </a>
            </div>
            <img
                alt="face"
                className="rounded-full select-none h-80 animate-bounce"
                height={"320"}
                src={face}
                width={"323.64"}
            />
        </header>
    );
}
