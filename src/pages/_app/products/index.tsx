import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="container">
      <h1 className="text-black">Olá</h1>
      <p className="text-black">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, iusto
        corrupti itaque ipsa consectetur natus tempora saepe dolorem esse modi
        non necessitatibus rem voluptatum! Error sequi corrupti in placeat vel.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quam
        voluptas numquam, explicabo saepe ea vero nisi at ipsum optio non
        repudiandae in ipsa, quidem perspiciatis laudantium harum nesciunt?
        Assumenda!
      </p>
    </div>
  );
}
