import {MutableRefObject} from "react";
import {motion} from "framer-motion";

import {projectsMockup} from "../mockups/projects-mockup";

import {ProjectCard} from "./project-card";
import {Title} from "./ui/title";

import {projectsTranslate} from "@/i18n/projects-translates";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    projectsRef: MutableRefObject<null>;
}

export function Projects({projectsRef}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const projectsTranslated = projectsTranslate[language];

    const container = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0,
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section
            ref={projectsRef}
            className="flex items-center justify-center w-full min-h-screen py-20 text-white bg-gradient-to-r from-[#0B0613] via-[#0A051B] to-[#0E0916] px-9"
        >
            <div className="flex flex-col items-center justify-center gap-5 max-w-notebook">
                <Title h2={projectsTranslated.title} h3={projectsTranslated.subtitle} />
                <motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
                    initial="hidden"
                    variants={container}
                    viewport={{once: true, amount: 0.2}}
                    whileInView="visible"
                >
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
                </motion.div>
            </div>
        </section>
    );
}
