// Importa os utilitários do TanStack Router:
// - RouterProvider: componente que fornece o router para a aplicação
// - createRouter: função para criar e configurar a instância do router
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Importa a árvore de rotas gerada automaticamente a partir da estrutura de arquivos
import { routeTree } from "./router-tree-gen";
import { CartProvider } from "./contexts/CartProvider";

// Cria a instância do router passando a árvore de rotas configurada
const router = createRouter({ routeTree });

// Estende o módulo do TanStack Router com tipos TypeScript customizados
// Permite que o TypeScript reconheça o tipo específico do router em toda a aplicação
declare module "@tanstack/react-router" {
  interface Register {
    // Registra o tipo do router para validação de tipos em tempo de compilação
    router: typeof router;
  }
}

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
