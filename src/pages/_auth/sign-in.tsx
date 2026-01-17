import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-black">
      Hello "/_app/_auth/sign-in"!
      <Link to="/sign-up">Criar conta</Link>
    </div>
  );
}
