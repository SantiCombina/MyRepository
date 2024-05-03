import {zodResolver} from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import {MutableRefObject, useEffect} from "react";
import {useForm} from "react-hook-form";
import {toast} from "sonner";
import {z} from "zod";
import {motion} from "framer-motion";

import {useBreakpoint} from "../hooks/useBreakpoint";

import {Button} from "./ui/button";
import {Input} from "./ui/input";
import {Map} from "./ui/map";

import {contactTranslate, languageErrorMap} from "@/i18n/contact-translates";
import {PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from "@/services/config";
import {useLanguageStore} from "@/stores/language-store";

interface Props {
    contactRef: MutableRefObject<null>;
}

export function Contact({contactRef}: Props) {
    const breakpoint = useBreakpoint();

    const language = useLanguageStore((state) => state.languageValue);
    const contactTranslated = contactTranslate[language];

    const schema = z.object({
        name: z.string().min(1, {message: languageErrorMap[language].name_required}),
        email: z
            .string()
            .min(1, {message: languageErrorMap[language].email_required})
            .email({message: languageErrorMap[language].email_invalid}),
        textarea: z.string().min(1, {message: languageErrorMap[language].message_required}),
    });

    type FormValues = z.infer<typeof schema>;

    const schemaLanguage = {
        EN: schema,
        ES: schema,
    };

    const test = schemaLanguage[language];

    const methods = useForm<FormValues>({
        resolver: zodResolver(test),
        mode: "all",
        reValidateMode: "onChange",
    });

    const submitHandler = (values: FormValues) => {
        const templateParams = {
            to_name: "Santiago",
            from_name: values.name,
            from_email: values.email,
            message: values.textarea,
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
            () => {
                toast.success(contactTranslated.success);
            },
            () => {
                toast.error(contactTranslated.error);
            },
        );
    };

    useEffect(() => {
        const triggers: ("name" | "email" | "textarea")[] = [];

        methods.getFieldState("name").invalid && triggers.push("name");
        methods.getFieldState("email").invalid && triggers.push("email");
        methods.getFieldState("textarea").invalid && triggers.push("textarea");

        triggers.length > 0 && methods.trigger(triggers);
    }, [language]); //eslint-disable-line

    return (
        <section
            ref={contactRef}
            className="flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-[#0A0613] via-[#0A051B] to-[#0E0916]"
        >
            <motion.div
                className="flex flex-col items-center justify-center flex-1 w-full h-full py-10 gap-x-12 xl:items-end px-9"
                initial={{x: -200, opacity: 0}}
                viewport={{once: true, amount: 0.2}}
                whileInView={{x: 0, opacity: 1}}
            >
                <div className="flex flex-col max-w-[500px] items-center justify-center h-full w-full bg-[#100d25] p-5 rounded-xl mt-[84px]">
                    <div className="flex flex-col pb-4 w-fit">
                        <h2 className="text-[#AAA6C3] text-sm">{contactTranslated.title}</h2>
                        <h3 className="text-3xl font-bold">{contactTranslated.subtitle}</h3>
                    </div>
                    <form action="" className="w-full gap-4" onSubmit={methods.handleSubmit(submitHandler)}>
                        <Input
                            error={methods.formState.errors.name?.message}
                            label={contactTranslated.input_name}
                            name="name"
                            register={methods.register}
                        />
                        <Input
                            error={methods.formState.errors.email?.message}
                            label={contactTranslated.input_email}
                            name="email"
                            register={methods.register}
                        />
                        <label className="flex flex-col" htmlFor="textarea">
                            <textarea
                                className="rounded-md md:p-5 p-2 w-full bg-[#151030] outline-none resize-none"
                                id="textarea"
                                placeholder={contactTranslated.input_textarea}
                                rows={breakpoint.is.sm ? 4 : 6}
                                {...methods.register("textarea")}
                            />
                            <h3 className="text-sm text-red-500 h-7">{methods.formState.errors.textarea?.message}</h3>
                        </label>
                        <Button type="submit" />
                    </form>
                </div>
                <div className="flex items-center justify-center w-full max-w-[500px] gap-5 pt-6 text-3xl text-gray-600">
                    <a
                        aria-label="Go to my Linkedin"
                        href="https://www.linkedin.com/in/santiago-combina/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        {" "}
                        <i className="fa-brands fa-linkedin hover:text-[#0A66C2] hover:scale-125 active:scale-110 active:text-blue-900 transition-all duration-300" />
                    </a>
                    <a
                        aria-label="Go to my Github"
                        href="https://github.com/SantiCombina"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <i className="fa-brands fa-github hover:text-[#E6EDF3] hover:scale-125 active:scale-110 active:text-gray-600 transition-all duration-300" />
                    </a>
                </div>
            </motion.div>
            {(breakpoint.is.xl || breakpoint.is["2xl"]) && (
                <motion.div
                    className="flex items-center justify-center flex-1 w-full h-screen"
                    initial={{x: 200, opacity: 0}}
                    viewport={{once: true, amount: 0.2}}
                    whileInView={{x: 0, opacity: 1}}
                >
                    <Map />
                </motion.div>
            )}
        </section>
    );
}
