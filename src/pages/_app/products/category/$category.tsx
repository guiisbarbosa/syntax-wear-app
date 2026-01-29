import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { products } from "../../../../mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
});

function RouteComponent() {
  const { category } = Route.useParams();
  console.log(category)

  const filteredProducts = products.filter(
    (product) =>
      (product.category?.name ?? "").toLowerCase() === category.toLowerCase(),
  );

  return (
    <div className="container pt-44 md:pt-54 pb-10 md:px-10 text-black mb-10">
      <h1 className="text-3xl text-center mb-3">Lista de Produtos</h1>

      <h2 className="text-center mb-10 p-2">
        Conforto excepcional para suas aventuras do dia-a-dia
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center">
          Nenhum produto encontrado para esta categoria.
        </p>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}
