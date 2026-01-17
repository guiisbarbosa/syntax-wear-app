import { Outlet, createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/_auth")({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
