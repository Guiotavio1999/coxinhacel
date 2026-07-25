/**
 * Cores de demonstração do iPhone 17 exibidas no seletor visual do hero.
 *
 * IMPORTANTE: isto é uma demonstração visual temporária, não um dado
 * comercial confirmado. Não há cadastro de produto/estoque ainda (sem
 * CRUD nesta fase) — os nomes e hex abaixo NÃO devem ser tratados como
 * cores realmente disponíveis para compra até serem validados pela loja
 * e conectados a `productsService` (ver documentation/DATABASE.md).
 */
export interface ProductColorOption {
  id: string;
  name: string;
  hex: string;
}

export const IPHONE_17_COLOR_OPTIONS: ProductColorOption[] = [
  { id: "preto", name: "Preto", hex: "#1c1f24" },
  { id: "branco", name: "Branco", hex: "#f4f7fa" },
  { id: "azul-nevoa", name: "Azul-névoa", hex: "#8fa9c2" },
  { id: "salvia", name: "Sálvia", hex: "#9caf95" },
  { id: "lavanda", name: "Lavanda", hex: "#b9aed4" },
];
