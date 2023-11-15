import {MutableRefObject} from "react";

import {projectsMockup} from "../mockups/projects-mockup";

import {ProjectCard} from "./project-card";

interface Props {
    projectsRef: MutableRefObject<null>;
}

export function Projects({projectsRef}: Props) {
    return (
        <div
            ref={projectsRef}
            className="flex items-center justify-center w-full py-32 text-white bg-primary md:h-screen md:py-0 px-9"
        >
            <div className="flex flex-col items-center justify-center gap-5 max-w-notebook">
                <div className="flex flex-col w-fit">
                    <h3 className="text-[#AAA6C3] text-sm">MY WORK</h3>
                    <h2 className="text-3xl font-bold">Projects</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
                    {projectsMockup.map((project) => (
                        <ProjectCard
                            key={project.id}
                            deploy={project.deploy}
                            description={project.description}
                            image={project.image}
                            name={project.name}
                            repository={project.repository}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
