import {MutableRefObject} from "react";

interface Props {
    skillsRef: MutableRefObject<null>;
}

export function Skills({skillsRef}: Props) {
    return (
        <div ref={skillsRef} className="flex items-center justify-center h-screen text-white bg-primary px-9">
            <div className="flex flex-col w-fit">
                <h3 className="text-[#AAA6C3] text-sm">MY SKILLS</h3>
                <h2 className="text-3xl font-bold">Knowledge</h2>
            </div>
        </div>
    );
}
