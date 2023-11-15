import {MutableRefObject} from "react";

interface Props {
    skillsRef: MutableRefObject<null>;
}

export function Skills({skillsRef}: Props) {
    return (
        <div ref={skillsRef} className="flex items-center justify-center h-screen text-white bg-primary px-9">
            <span>Skills</span>
        </div>
    );
}
