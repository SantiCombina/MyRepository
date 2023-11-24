import {create} from "zustand";

export type Languages = "ES" | "EN";

export interface LanguageStore {
    languageValue: Languages;
    setLanguage: (language: Languages) => void;
}

const getNavigatorLanguage = navigator.language.split("-")[0].toUpperCase();

export const useLanguageStore = create<LanguageStore>((set) => ({
    languageValue: getNavigatorLanguage === "EN" ? "EN" : "ES",
    setLanguage: (language: Languages) => {
        set({languageValue: language});
    },
}));
