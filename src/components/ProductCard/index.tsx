import { Link } from "@tanstack/react-router";
import type { Product } from "../../interfaces/Product";
import { MdAddShoppingCart } from "react-icons/md";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-2xl  shadow-md">
      <Link
        to="/products/$productId"
        params={{ productId: String(product.id) }}
      >
        <img
          className="w-full max-h-100 object-cover rounded-md mb-2"
          src={product.image}
          alt={product.name}
        />
      </Link>

      <div className="text-black bg-gray-100/40 rounded-2xl p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p>{product.color}</p>
        <div className="flex justify-between mt-2.5">
          <p className="font-bold">{product.price},00</p>
          <button className="cursor-pointer" onClick={() => addToCart(product)}>
            <MdAddShoppingCart className="th-7 w-7" />
          </button>
        </div>
      </div>
    </div>
  );
};
