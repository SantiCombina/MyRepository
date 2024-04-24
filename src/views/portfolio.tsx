import {useRef} from "react";

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
        <div className="min-h-screen overflow-y-auto bg-no-repeat bg-primary bg-hero-pattern scroll-smooth font-monserrat selection:bg-fuchsia-600">
            <Navbar contactRef={contactRef} headerRef={headerRef} projectsRef={projectsRef} skillsRef={skillsRef} />
            <Header headerRef={headerRef} />
            <Projects projectsRef={projectsRef} />
            <Skills skillsRef={skillsRef} />
            <Contact contactRef={contactRef} />
        </div>
    );
}
