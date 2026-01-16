import { useState, useEffect } from "react";
import { Button } from "../Button";
import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";

export const Gallery = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="w-full container">
      <div
        className="
          grid gap-7.5          
          grid-cols-2
          md:grid-cols-4
          
          md:auto-rows-[300px]
          auto-rows-[minmax(180px, auto)]
        "
        style={{
          gridTemplateAreas: isDesktop
            ? `
              "highlight highlight sneaker-purple sneaker-purple"
              "highlight highlight model sneaker-color"
              "sneaker-white sneaker-white model sneaker-silver"
            `
            : `
              "highlight highlight"
              "sneaker-white sneaker-white"
              "model sneaker-color"
              "model sneaker-silver"
              "sneaker-purple sneaker-purple"
            `,
        }}
      >
        {/* Desktop: Highlight - Imagem do modelo masculino */}
        <div
          style={{ gridArea: "highlight" }}
          className="
            col-span-2 row-span-2
            md:col-span-2 md:row-span-2
            rounded-[20px]
            overflow-hidden
            relative
            min-h-100
            md:min-h-auto
          "
        >
          <img
            src={galeriaHomem}
            alt="Modelo masculino"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/20 opacity-0 hover:opacity-100 transition-opacity transition-duration-300">
            <div className="text-center">
              <p className="text-sm font-medium text-white tracking-widest mb-2">
                Krypton One
              </p>
              <h3 className="text-2xl font-medium text-white leading-tight mb-2">
                Estilo urbano com atitude
              </h3>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="md">
                Feminino
              </Button>
              <Button variant="secondary" size="md">
                Masculino
              </Button>
            </div>
          </div>
        </div>

        {/* Desktop: Sneaker Purple - Tenis roxo */}
        <div
          style={{ gridArea: "sneaker-purple" }}
          className="
            col-span-2 row-span-1
            md:col-span-2 md:row-span-1
            rounded-[20px]
            overflow-hidden
            max-h-45
            md:max-h-full
          "
        >
          <img
            src={galeriaTenisRoxo}
            alt="Tenis roxo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop: Model - Imagem da modelo feminina */}
        <div
          style={{ gridArea: "model" }}
          className="
            col-span-1 row-span-2
            md:col-span-1 md:row-span-2
            rounded-[20px]
            overflow-hidden
          "
        >
          <img
            src={galeriaModelo}
            alt="Modelo feminina"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop: Sneaker Color - Tenis colorido */}
        <div
          style={{ gridArea: "sneaker-color" }}
          className="
            col-span-1 row-span-1
            md:col-span-1 md:row-span-1
            rounded-[20px]
            overflow-hidden
          "
        >
          <img
            src={galeriaTenisColorido}
            alt="Tenis colorido"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop: Sneaker White - Tenis branco e preto */}
        <div
          style={{ gridArea: "sneaker-white" }}
          className="
            col-span-2 row-span-1
            md:col-span-2 md:row-span-1
            rounded-[20px]
            overflow-hidden
            max-h-45
            md:max-h-full
          "
        >
          <img
            src={galeriaTenisBrancoPreto}
            alt="Tenis branco e preto"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop: Sneaker Silver - Tenis cinza */}
        <div
          style={{ gridArea: "sneaker-silver" }}
          className="
            col-span-1 row-span-1
            md:col-span-1 md:row-span-1
            rounded-[20px]
            overflow-hidden
          "
        >
          <img
            src={galeriaTenisCinza}
            alt="Tenis cinza"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
