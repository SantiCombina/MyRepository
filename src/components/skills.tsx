import {MutableRefObject} from "react";

import {SkillCard} from "./skill-card";

import {useLanguageStore} from "@/stores/language-store";
import {skillsTranslate} from "@/i18n/skills-translates";
import {skillsMockup} from "@/mockups/skills-mockup";

interface Props {
    skillsRef: MutableRefObject<null>;
}

export function Skills({skillsRef}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const skillsTranslated = skillsTranslate[language];

    return (
        <section
            ref={skillsRef}
            className="flex items-center justify-center min-h-screen py-10 text-white bg-primary px-9"
        >
            <div className="flex flex-col items-center justify-center gap-5 max-w-notebook">
                <div className="flex flex-col w-fit">
                    <h3 className="text-[#AAA6C3] text-sm">{skillsTranslated.title}</h3>
                    <h2 className="text-3xl font-bold">{skillsTranslated.subtitle}</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
                    {skillsMockup.map((skill) => (
                        <SkillCard key={skill.id} image={skill.image} name={skill.name} />
                    ))}
                </div>
            </div>
        </section>
    );
}
