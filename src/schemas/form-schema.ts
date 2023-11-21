import {z} from "zod";

export const formSchema = z.object({
    name: z.string().min(1, "Es necesario que ingrese su nombre"),
    email: z.string().min(1, "Este campo es obligatorio").email("Email no válido"),
    textarea: z.string().min(1, "Es necesario que ingrese un mensaje"),
});

export type FormValues = z.infer<typeof formSchema>;
