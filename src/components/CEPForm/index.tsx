import { useState } from "react";
import { useCepForm } from "./cep-form.schema";
import type { Adress } from "../../interfaces/adress";
import { formatCurrency } from "../../utils/format-currency";

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
};

export const CEPForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useCepForm();
  const [address, setAddress] = useState<Adress | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddressError(null);
    setAddress(null);


    try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      setAddressError("CEP não encontrado");
      return;
    }
    const shippingCost = SHIPPING_BY_REGION[data.regiao];

    if (!shippingCost) {
      setAddressError("Região não suportada para entrega");
      return;
    }

    setAddress({ ...data, shippingCost: shippingCost });} catch {
      setAddressError("Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.")
    }

  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
        noValidate
      >
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Insira seu CEP"
              {...register("cep")}
              className={`w-full border rounded-md p-3 ${
                errors.cep ? "border-red-500" : "border-[#c0c0c0]"
              }`}
            />
            {errors.cep && (
              <p className="text-red-500 text-sm mt-1">{errors.cep.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 disabled:bg-gray-500"
          >
            {isSubmitting ? "Calculando..." : "Calcular"}
          </button>
        </div>
      </form>

      {addressError && (
        <div className="mt-4">
          <p className="text-red-600 text-sm">{addressError}</p>
        </div>
      )}

      {address && (
        <div className="mt-4">
          <p>
            <strong>Região:</strong> {address.regiao}
          </p>
          <p>
            <strong>Custo de Envio:</strong>{" "}
            {formatCurrency(address.shippingCost)}
          </p>
        </div>
      )}
    </>
  );
};
