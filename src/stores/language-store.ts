import {create} from "zustand";

export type Languages = "ES" | "EN";

export interface LanguageStore {
    languageValue: Languages;
    setLanguage: (language: Languages) => void;
}

const getDefaultLanguage = (): Languages => {
    const userLanguage = navigator.language.toLowerCase();
    const mainLanguage = userLanguage.split("-")[0];

    return mainLanguage === "es" ? "ES" : "EN";
};

export const useLanguageStore = create<LanguageStore>((set) => ({
    languageValue: getDefaultLanguage(),
    setLanguage: (language: Languages) => {
        set({languageValue: language});
    },
}));
