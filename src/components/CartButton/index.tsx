import IconCart from "@/assets/images/icon-cart.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartButtonprops {
  onClick?: () => void;
}

export const CartButton = ({ onClick }: CartButtonprops) => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <button className="cursor-pointer relative flex items-center" onClick={onClick}>
      <img src={IconCart} alt="Ícone carrinho de compras" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-error text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  );
};
