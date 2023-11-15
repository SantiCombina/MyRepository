import {MutableRefObject} from "react";

import {useBreakpoint} from "../hooks/useBreakpoint";

import {Map} from "./ui/map";

interface Props {
    contactRef: MutableRefObject<null>;
}

export function Contact({contactRef}: Props) {
    const breakpoint = useBreakpoint();

    return (
        <div ref={contactRef} className="flex h-screen text-white bg-primary">
            <div className="flex flex-col items-center justify-center w-full h-full gap-x-12 xl:items-end px-9">
                <form className="flex flex-col gap-6 items-center justify-center w-[500px] bg-[#100d25] p-5 rounded-xl mt-[84px]">
                    <div className="flex flex-col w-fit">
                        <h3 className="text-[#aaa6c3] text-sm">GET IN TOUCH</h3>
                        <h2 className="text-3xl font-bold">Contact Me</h2>
                    </div>
                    <input className="rounded-md p-5 w-full bg-[#151030] outline-none" placeholder="Name" />
                    <input className="rounded-md p-5 w-full bg-[#151030] outline-none" placeholder="Email" />
                    <textarea
                        className="rounded-md p-5 w-full bg-[#151030] outline-none resize-none"
                        placeholder="Write your message"
                        rows={6}
                    />
                    <button className="bg-pink-600 font-semibold rounded-sm cursor-pointer p-5 w-full shadow-md shadow-[#151030]">
                        Send
                    </button>
                </form>
                <div className="flex w-[500px] text-gray-600 justify-center items-center pt-6 gap-5 text-3xl">
                    <a href="https://www.linkedin.com/in/santiago-combina/" rel="noreferrer" target="_blank">
                        {" "}
                        <i className="fa-brands fa-linkedin hover:text-[#0A66C2] hover:scale-125 transition-all duration-300" />
                    </a>
                    <a href="https://github.com/SantiCombina" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-github hover:text-[#E6EDF3] hover:scale-125 transition-all duration-300" />
                    </a>
                </div>
            </div>
            {(breakpoint.is.xl || breakpoint.is["2xl"]) && (
                <div className="flex items-center justify-center w-full h-full">
                    <Map />
                </div>
            )}
        </div>
    );
}
