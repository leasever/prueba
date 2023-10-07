import { ProductEntry } from "../types";
import productData from "../data/products.json";

const products: ProductEntry[] = productData as ProductEntry[];
const $ = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);

export default function searchProductsByName(query: string): ProductEntry[] {
  // Divide el texto de búsqueda en palabras individuales
  const keywords = query.toLowerCase().split(" ");

  return products.filter((product) => {
    // Convierte el nombre del producto a minúsculas
    const productName = product.name.toLowerCase();

    // Verifica si todas las palabras clave están presentes en el nombre del producto
    return keywords.some((keyword) => productName.includes(keyword));
  });
}

export function clearSearchContext() {
  const cardSearch = $("#cardSearch");
  const searchInput = $("#buscar") as HTMLInputElement;
  const searchResultsShadow = $("#searchResultsShadow");
  const clearSearch = () => {
    cardSearch!.remove();
    searchInput.removeAttribute("disabled");
    searchInput.value = "";
    searchResultsShadow!.className = "d-none";
  };
  return clearSearch;
}
