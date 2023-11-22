import {MutableRefObject} from "react";

import {projectsMockup} from "../mockups/projects-mockup";

import {ProjectCard} from "./project-card";

import {projectsTranslate} from "@/i18n/projects-translates";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    projectsRef: MutableRefObject<null>;
}

export function Projects({projectsRef}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const projectsTranslated = projectsTranslate[language];

    return (
        <section
            ref={projectsRef}
            className="flex items-center justify-center w-full min-h-screen py-10 text-white bg-primary px-9"
        >
            <div className="flex flex-col items-center justify-center gap-5 max-w-notebook">
                <div className="flex flex-col w-fit">
                    <h3 className="text-[#AAA6C3] text-sm">{projectsTranslated.title}</h3>
                    <h2 className="text-3xl font-bold">{projectsTranslated.subtitle}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7">
                    {projectsMockup.map((project) => (
                        <ProjectCard
                            key={project.id}
                            deploy={project.deploy}
                            description={project.description[language]}
                            image={project.image}
                            name={project.name[language]}
                            repository={project.repository}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
