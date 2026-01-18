import { z } from "zod";

import { isValidCPF } from "../../utils/cpfValidator";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


export const registerUserFormSchema = z
  .object({
    firstName: z.string().trim().nonempty("Digite um nome válido"),

    lastName: z.string().trim().nonempty("Digite um último nome válido"),

    email: z
      .email("Por favor, insira um email válido"),

    cpf: z
      .string({ message: "CPF é obrigatório" })
      .trim()
      .refine(isValidCPF, "CPF inválido"),

    birthDate: z
      .string({ message: "Data de nascimento é obrigatória" })
      .refine((date) => {
        const parsed = new Date(date);
        return !isNaN(parsed.getTime());
      }, "Data de nascimento inválida")
      .refine((date) => {
        const birthDate = new Date(date);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        const isAtLeast18 =
          age > 18 ||
          (age === 18 && monthDifference > 0) ||
          (age === 18 && monthDifference === 0 && dayDifference >= 0);

        return isAtLeast18;
      }, "Você deve ter no mínimo 18 anos"),

    password: z
      .string({ message: "Senha é obrigatória" })
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
      .regex(/[0-9]/, "Senha deve conter pelo menos um número"),

    confirmPassword: z.string({
      message: "Confirmação de senha é obrigatória",
    }),

    cellphone: z.string().min(1, "Celular é obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all"
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
}
