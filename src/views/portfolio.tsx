import {useRef} from "react";
import {ReactLenis} from "lenis/react";

import {Header} from "../components/header";
import {Navbar} from "../components/ui/navbar";
import {Projects} from "../components/projects";
import {Skills} from "../components/skills";
import {Contact} from "../components/contact";

export function Portfolio() {
    const headerRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <ReactLenis root>
            <div className="min-h-screen overflow-y-auto scroll-smooth font-monserrat selection:bg-fuchsia-600 bg-gradient-to-r from-[#0A0613] via-[#0A051B] to-[#0E0916] text-white">
                <Navbar contactRef={contactRef} headerRef={headerRef} projectsRef={projectsRef} skillsRef={skillsRef} />
                <Header headerRef={headerRef} />
                <Projects projectsRef={projectsRef} />
                <Skills skillsRef={skillsRef} />
                <Contact contactRef={contactRef} />
            </div>
        </ReactLenis>
    );
}
