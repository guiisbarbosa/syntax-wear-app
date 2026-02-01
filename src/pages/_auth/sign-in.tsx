import { createFileRoute, Link } from "@tanstack/react-router";
import { LoginForm } from "../../components/LoginForm";
import { Logo } from "../../components/Logo";
import GoogleIcon from "@/assets/images/google-icon.png";
import { Separator } from "../../components/Separator";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
  head: () => ({
    meta: [{ title: "Login - SyntaxWear" }],
  }),
});

function RouteComponent() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-surface p-5 text-black">
      <div className="w-112.5 bg-white rounded-[18px] p-10 shadow-md">
        <div className="flex flex-col">
          <Logo />

          <h2 className="text-black font-bold text-[21px] mb-2">Entrar</h2>

          <p className="mb-3">Escolha como você gostaria de fazer login</p>

          <button className="w-full flex items-center justify-center gap-2 border border-border rounded-md py-3 hover:bg-gray-50 transition cursor-pointer">
            <img src={GoogleIcon} alt="Google" className="w-5 h-5" />
            <span className="text-sm font-medium text-black">
              Continuar com Google
            </span>
          </button>

          <Separator />

          <LoginForm />

          <p>
            Ainda não possui conta?{" "}
            <Link to="/sign-up" className="text-accent hover:underline">
              Cadastre-se
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
