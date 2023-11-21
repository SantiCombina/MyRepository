import {UseFormRegister} from "react-hook-form";

interface Props {
    label: string;
    name: string;
    error: string | undefined;
    register: UseFormRegister<any>;
    type?: "password" | "number" | "text";
}

export function Input({label, name, error, register, type = "text"}: Props) {
    return (
        <label htmlFor={name}>
            <input
                autoComplete="off"
                className="rounded-md p-5 w-full bg-[#151030] outline-none resize-none"
                id={name}
                type={type}
                {...register(name)}
                placeholder={label}
            />
            <h3 className="h-6 text-red-500">{error ? error : ""}</h3>
        </label>
    );
}
