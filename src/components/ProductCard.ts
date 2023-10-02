import { increaseCartQuantity } from "../context/ShopingCartContext";
import { ProductEntry } from "../types";
import { formatCurrency } from "../utilities/utils";
import Rating from "../utilities/rating";

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

  const productHtml = `<div class="d-flex align-items-stretch">
  <div class="card">
    <img
      src="${image[0]}"
      class="card-img-top"
      alt="${name}"
      loading="lazy"
    />
    <div class="card-body row">
      <div>
        <span class="card-title d-flex justify-content-between bgn fs-3 mb-2">
          ${name}
          <span class="fs-6">${formatCurrency(price)}</span>
        </span>
        <div>${Rating(rating)}</div>
      </div>

      <div class="d-grid mx-auto my-3 align-items-end">
        <div class="row align-content-center justify-content-around">
          <a
            href="#staticBackdrop${_id}"
            data-bs-toggle="modal"
            class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2 col-5"
          >
            Detalles
            <i class="fa-solid fa-eye"></i>
          </a>
          <button
            class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2 col-5"
            id="addToCartButton${_id}"
          >
            Añadir
            <i
              id="icon${_id}"
              class="iconAddToCar fa-solid fa-shopping-cart"
            ></i>
          </button>
        </div>
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
