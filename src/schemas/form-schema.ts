import {z} from "zod";

import {useLanguageStore} from "@/stores/language-store";

const languageErrorMap = {
    EN: {
        name_required: "Please enter your name",
        email_required: "This field is required",
        email_invalid: "Invalid email",
        message_required: "Please enter a message",
    },
    ES: {
        name_required: "Es necesario que ingrese su nombre",
        email_required: "Este campo es obligatorio",
        email_invalid: "Email no válido",
        message_required: "Es necesario que ingrese un mensaje",
    },
};

export const formSchema = z.object({
    name: z.string().min(1, {message: languageErrorMap[useLanguageStore.getState().languageValue].name_required}),
    email: z
        .string()
        .min(1, {message: languageErrorMap[useLanguageStore.getState().languageValue].email_required})
        .email({message: languageErrorMap[useLanguageStore.getState().languageValue].email_invalid}),
    textarea: z
        .string()
        .min(1, {message: languageErrorMap[useLanguageStore.getState().languageValue].message_required}),
});

export type FormValues = z.infer<typeof formSchema>;
