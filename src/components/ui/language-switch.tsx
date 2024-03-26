import {useLanguageStore} from "@/stores/language-store";

export function LanguageSwitch() {
    const changeLanguage = useLanguageStore((state) => state.setLanguage);
    const currentLanguage = useLanguageStore((state) => state.languageValue);

    return (
        <div className="flex items-center gap-1 text-gray-300">
            <img alt="language icon" className="cursor-pointer h-7 hover:text-white" src="/language-icon.svg" />
            <div className="flex items-center gap-3">
                <span
                    className={`${currentLanguage === "EN" ? "text-white" : "opacity-70 scale-90"} transition-all`}
                    onClick={() => changeLanguage("EN")}
                >
                    en
                </span>
                <span
                    className={`${currentLanguage === "ES" ? "text-white" : "opacity-70 scale-90"} transition-all`}
                    onClick={() => changeLanguage("ES")}
                >
                    es
                </span>
            </div>
        </div>
    );
}
