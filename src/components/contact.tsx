import {MutableRefObject} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import {toast} from "sonner";

import {useBreakpoint} from "../hooks/useBreakpoint";

import {Map} from "./ui/map";
import {Input} from "./ui/input";
import {Button} from "./ui/button";

import {useLanguageStore} from "@/stores/language-store";
import {contactTranslate} from "@/i18n/contact-translates";
import {FormValues, formSchema} from "@/schemas/form-schema";
import {PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID} from "@/services/config";

interface Props {
    contactRef: MutableRefObject<null>;
}

export function Contact({contactRef}: Props) {
    const breakpoint = useBreakpoint();

    const language = useLanguageStore((state) => state.languageValue);
    const contactTranslated = contactTranslate[language];

    const methods = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        mode: "all",
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
                toast.success("Mensaje enviado con éxito");
            },
            () => {
                toast.error("Ocurrió un error al enviar el mensaje");
            },
        );
    };

    return (
        <section
            ref={contactRef}
            className="flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-[#0A0613] via-[#0A051B] to-[#0E0916]"
        >
            <div className="flex flex-col items-center justify-center flex-1 w-full h-full py-10 gap-x-12 xl:items-end px-9">
                <div className="flex flex-col max-w-[500px] items-center justify-center h-full w-full bg-[#100d25] p-5 rounded-xl mt-[84px]">
                    <div className="flex flex-col pb-4 w-fit">
                        <h3 className="text-[#AAA6C3] text-sm">{contactTranslated.title}</h3>
                        <h2 className="text-3xl font-bold">{contactTranslated.subtitle}</h2>
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
                    <a href="https://www.linkedin.com/in/santiago-combina/" rel="noreferrer" target="_blank">
                        {" "}
                        <i className="fa-brands fa-linkedin hover:text-[#0A66C2] hover:scale-125 transition-all duration-300" />
                    </a>
                    <a href="https://github.com/SantiCombina" rel="noreferrer" target="_blank">
                        <i className="fa-brands fa-github hover:text-[#E6EDF3] hover:scale-125 transition-all duration-300" />
                    </a>
                </div>
            </div>
            {(breakpoint.is.xl || breakpoint.is["2xl"]) && (
                <div className="flex items-center justify-center flex-1 w-full h-screen">
                    <Map />
                </div>
            )}
        </section>
    );
}
