import { createFileRoute } from "@tanstack/react-router";

import { Categories } from "../../components/Categories";
import { Gallery } from "../../components/Gallery";
import { Hero } from "../../components/Hero";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="py-10">
      <Hero />
      <Categories />
      <Gallery />
    </main>
  );
}
