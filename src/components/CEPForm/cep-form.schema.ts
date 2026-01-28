import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const cepFormSchema = z.object({
  cep: z
    .string({ message: "CEP é obrigatório" })
    .trim()
    .nonempty("CEP é obrigatório")
    .regex(
      /^\d{5}-?\d{3}$/,
      "CEP inválido. Use o formato XXXXX-XXX ou XXXXXXXX",
    )
    .refine((cep) => {
      const cleanCep = cep.replace("-", "");
      return !/^(\d)\1{7}$/.test(cleanCep);
    }, "CEP inválido"),
});

export type CepFormData = z.infer<typeof cepFormSchema>;

export const useCepForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<CepFormData>({
    resolver: zodResolver(cepFormSchema),
    mode: "onBlur",
    defaultValues: {
      cep: "",
    },
    criteriaMode: "all",
  });

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    setError,
    reset,
  };
};
