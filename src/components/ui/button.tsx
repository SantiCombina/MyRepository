import {contactTranslate} from "@/i18n/contact-translates";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    type?: "submit" | "button";
}

export function Button({type = "button"}: Props) {
    const language = useLanguageStore((state) => state.languageValue);
    const contactTranslated = contactTranslate[language];

    return (
        <button
            className="bg-pink-600 font-semibold rounded-sm cursor-pointer p-5 w-full shadow-md shadow-[#151030] active:bg-pink-800"
            type={type}
        >
            {contactTranslated.send}
        </button>
    );
}
