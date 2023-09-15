import { ProductEntry } from "../types";
import { formatCurrency } from "../utilities/formatCurrency";
import Rating from "../utilities/rating";
import { increaseCartQuantity } from "../context/ShopingCartContext";

export default function ProductCard({
  _id,
  name,
  image,
  price,
  rating,
}: ProductEntry) {
  const activatecart =
    document.querySelector<HTMLButtonElement>("#activateCart")!;

  const addToCart = () => {
    increaseCartQuantity(_id);
    activatecart.click();
  };

  const productHtml = `
    <div class="col">
      <div class="card">
        <a href="#staticBackdrop${_id}" data-bs-toggle="modal">
          <img src="${image[0]}" class="card-img-top" alt="${name}" loading="lazy"/>
        </a>
        <div class="card-body">
          <span class="card-title d-flex justify-content-between bgn fs-3 mb-2">
            ${name}
            <span class="fs-6">${formatCurrency(price)}</span>
          </span>
          <div>${Rating(rating)}</div>
          <div class="d-grid col-6 mx-auto mb-3">
            <button class="btn btn-outline-dark btn-custom text-break custom-cart-button" id="addToCartButton${_id}">
              Añadir 
              <i id="icon${_id}" class="fa-solid fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const container = document.createElement("div");
  container.innerHTML = productHtml;

  const addToCartButton = container.querySelector(`#addToCartButton${_id}`);
  addToCartButton?.addEventListener("click", addToCart);

  return container.firstElementChild as HTMLElement;
}
