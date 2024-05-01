import {motion} from "framer-motion";
import {MutableRefObject} from "react";

import {SkillCard} from "./skill-card";
import {Title} from "./ui/title";

import {skillsTranslate} from "@/i18n/skills-translates";
import {skillsMockup} from "@/mockups/skills-mockup";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    skillsRef: MutableRefObject<null>;
}

export function Skills({skillsRef}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const skillsTranslated = skillsTranslate[language];

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
            ref={skillsRef}
            className="flex items-center justify-center min-h-screen py-10 text-white bg-gradient-to-r from-[#0A0613] via-[#0A051B] to-[#0E0916] px-9"
        >
            <div className="flex flex-col items-center justify-center gap-5 max-w-notebook">
                <Title h2={skillsTranslated.title} h3={skillsTranslated.subtitle} />
                <motion.div
                    className="grid grid-cols-3 md:grid-cols-4 gap-7"
                    initial="hidden"
                    variants={container}
                    viewport={{once: true, amount: 0.2}}
                    whileInView="visible"
                >
                    {skillsMockup.map((skill) => (
                        <SkillCard key={skill.id} image={skill.image} name={skill.name} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
