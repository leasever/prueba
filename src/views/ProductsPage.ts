import ProductCard from "../components/ProductCard";
import productData from "../data/products.json";
import { ProductEntry } from "../types";

export default function ProductsPage() {
  window.scrollTo({
    top: 0,
  });
  return (
    (document.getElementById("main-content")!.innerHTML += `
    <section>
      <div class="products" name="product-section" id="product-section">
        <div class="container-xxl p-3 my-3">
          <div class="d-flex product-title pb-4">
            <h1 class=" text-center m-auto text-break">Nuestros productos</h1>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4 col-xl-10 m-auto justify-content-center" id="productSection">
            <!-- Aquí se mostrarán los productos -->
          </div>
        </div>
      </div>
    </section>`),
    cardProducts()
  );
}

function cardProducts() {
  const products: ProductEntry[] = productData as ProductEntry[];

  const productContainer = document.getElementById("productSection");

  products.forEach((product) => {
    const productCard = ProductCard(product);
    productContainer?.appendChild(productCard);
  });
}
