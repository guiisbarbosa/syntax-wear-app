import { useRegisterForm } from "./register-form.schema";

export const RegisterForm = () => {
  const { handleSubmit, register, errors, isSubmitting, setError, reset } =
    useRegisterForm();

  return (
    <form className="text-black">
      
      <div>
        <label className="text-xs text-gray-600">Primeiro Nome*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="text"
          {...register("firstName")}
        />

        {errors.firstName && (
          <p className="text-xs text-red-600 mt-1">
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Último Nome*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="text"
          {...register("lastName")}
        />

        {errors.lastName && (
          <p className="text-xs text-red-600 mt-1">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">E-mail*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="email"
          {...register("email")}
        />

        {errors.email && (
          <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">CPF*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cpf ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="text"
          {...register("cpf")}
        />

        {errors.cpf && (
          <p className="text-xs text-red-600 mt-1">{errors.cpf.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Data de Nascimento*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.birthDate ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="date"
          {...register("birthDate")}
        />

        {errors.birthDate && (
          <p className="text-xs text-red-600 mt-1">
            {errors.birthDate.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Celular*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.cellphone ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="tel"
          {...register("cellphone")}
        />

        {errors.cellphone && (
          <p className="text-xs text-red-600 mt-1">
            {errors.cellphone.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Senha*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.password ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="password"
          {...register("password")}
        />

        {errors.password && (
          <p className="text-xs text-red-600 mt-1">{errors.password.message}</p>
        )}
      </div>

      <div>
        <label className="text-xs text-gray-600">Confirmar Senha*</label>
        <input
          className={`w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${errors.confirmPassword ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-[#5433EB]"}`}
          type="password"
          {...register("confirmPassword")}
        />

        {errors.confirmPassword && (
          <p className="text-xs text-red-600 mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        className="bg-[#5433E8] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 disabled:cursor-wait w-full cursor-pointer mt-5"
      >
        {isSubmitting ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
};
