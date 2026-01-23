import IconCart from "@/assets/images/icon-cart.png";
import { useContext, useState } from "react";

import { formatCurrency } from "../../utils/format-currency";
import { CartContext } from "../../contexts/CartContext";

export const ShoppingCart = () => {
  const [cartIsOpen, setCartisOpen] = useState(false);

  const { cart, removeFromCart, incrementInCart, decrementInCart } =
    useContext(CartContext);

  const totalItems = cart.reduce(
    (total, product) => total + product.quantity,
    0,
  );

  return (
    <>
      <button
        className="cursor-pointer relative"
        onClick={() => setCartisOpen(!cartIsOpen)}
      >
        <img src={IconCart} alt="Ícone carrinho de compras" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <div
        className={`${cartIsOpen ? "bg-black/60 visible" : "transparent invisible"} fixed top-0 bottom-0 left-0 right-0`}
        onClick={() => setCartisOpen(false)}
      >
        <div
          className={`${cartIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 right-0 bottom-0 pt-6 transition-all duration-500 ease-in-out w-75 md:w-106 bg-white`}
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between px-5">
            <p className="text-2xl font-bold">Carrinho ({totalItems})</p>
            <button
              className="text-xl cursor-pointer"
              onClick={() => setCartisOpen(false)}
            >
              X
            </button>
          </header>
          <ul className="p-4 overflow-y-auto scrollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
            {cart.map((product) => (
              <li key={product.id} className="flex flex-col gap-1 pr-2">
                <button
                  className="self-end text-xs cursor-pointer"
                  onClick={() => removeFromCart(product.id)}
                >
                  X
                </button>

                <div className="flex gap-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16"
                  />

                  <div className="flex flex-col items-start">
                    <p className="mb-1 text-sm">{product.name}</p>

                    <p className="mb-1 text-sm">
                      Qauntidade:{product.quantity}
                    </p>

                    <p className="mb-3.5">
                      <span className="font-bold mr-1.5">
                        {formatCurrency(product.price)}
                      </span>{" "}
                      à vista
                    </p>

                    <div className="border flex gap-6 py-1 px-3">
                      <button
                        className="cursor-pointer"
                        onClick={() => decrementInCart(product)}
                      >
                        -
                      </button>

                      <p>{product.quantity}</p>

                      <button
                        className="cursor-pointer"
                        onClick={() => incrementInCart(product)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <footer className="absolute bottom-0 w-full h-25 p-4">
            <button className="w-full h-full bg-black text-white rounded-xs cursor-pointer hover:bg-gray-800">
              Fechar pedido
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};
