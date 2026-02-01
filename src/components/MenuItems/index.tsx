const menus = [
  { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
  { title: "Outlet", items: ["Masculino", "Feminino"] },
  { title: "Sobre", items: ["Quem somos", "Missão"] },
];

export const MenuItems = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map((menu) => (
        <nav key={menu.title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-surface-alt text-xl italic">
                {menu.title}
              </p>
            </li>
            {menu.items.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-text-tertiary transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
};
