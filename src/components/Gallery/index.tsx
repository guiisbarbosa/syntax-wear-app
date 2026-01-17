import { useState, useEffect } from "react";
import { Button } from "../Button";
import galeriaHomem from "@/assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import { Overlay } from "../Overlay";

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
          <Overlay
            title="Krypton One"
            subtitle="Estilo urbano com atitude"
            className=" inset-0 justify-center"
          >
            <Button variant="secondary">Feminino</Button>
            <Button variant="secondary">Masculino</Button>
          </Overlay>
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
