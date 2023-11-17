import {MutableRefObject} from "react";

import {useLanguageStore} from "@/stores/language-store";
import {skillsTranslate} from "@/i18n/skills-translates";

interface Props {
    skillsRef: MutableRefObject<null>;
}

export function Skills({skillsRef}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const skillsTranslated = skillsTranslate[language];

    return (
        <section ref={skillsRef} className="flex items-center justify-center h-screen text-white bg-primary px-9">
            <div className="flex flex-col w-fit">
                <h3 className="text-[#AAA6C3] text-sm">{skillsTranslated.title}</h3>
                <h2 className="text-3xl font-bold">{skillsTranslated.subtitle}</h2>
            </div>
        </section>
    );
}
