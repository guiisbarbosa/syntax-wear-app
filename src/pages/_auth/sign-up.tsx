import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-black">Hello "/_app/_auth/sign-up"!</div>;
}
