import {
  checkAddedToCart,
  increaseCartQuantity,
} from "../context/ShopingCartContext";
import { ProductEntry } from "../types";
import { formatCurrency } from "../utilities/formatCurrency";
import rating from "../utilities/rating";
import searchProductsByName, {
  clearSearchContext,
} from "../context/SearchContext";

export default function ResultsSearch() {
  const searchResultsShadow = document.getElementById("searchResultsShadow");
  const cardSearch = document.createElement("div");
  cardSearch.className = "overflow-auto";
  cardSearch.id = "cardSearch";
  const cardheader = document.createElement("div");
  cardheader.className = "card-header d-flex flex-row";
  const cardbody = document.createElement("div");
  cardbody.className = "card-body";

  document.addEventListener("input", handleSearch);

  searchResultsShadow!.className = "d-none";
  const searchInput = document.getElementById("buscar") as HTMLInputElement;

  function adjustCardHeight() {
    const navbar = document.querySelector(".navbar") as HTMLHeadElement;
    const navbarHeight = navbar!.offsetHeight;
    cardSearch.style.maxHeight = `calc(100vh - ${navbarHeight}px)`;
  }

  adjustCardHeight();

  function handleSearch(event: Event) {
    const headerHeight = document.getElementById("searchSection")!.offsetHeight;
    const searchResultsContainer = document.getElementById(
      "search-results-container"
    );

    if (event.target === searchInput) {
      const query = searchInput.value.trim();
      const results = searchProductsByName(query);

      if (query === "") {
        cardSearch.remove();
        searchResultsShadow!.className = "d-none";
      } else {
        cardheader.innerHTML = "";
        cardbody.innerHTML = "";
        searchResultsShadow!.className = "d-none";

        if (results.length === 0) {
          cardheader.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5 class="me-5">No se encontraron resultados</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`;
          clearSearchContext();
        } else {
          searchResultsShadow!.className = "search-result-shadow";

          cardheader.innerHTML = `
            <div class="d-flex justify-content-between align-items-center w-100">
              <h5>Resultado: ${results.length}</h5>
              <button type="button" class="btn-close "  id="clearSearch"></button>              
            </div>`;
          results.forEach((result: ProductEntry) => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("result-item");
            const addToCart = () => {
              increaseCartQuantity(result._id);
              checkAddedToCart("#addToCartButtonSearch", result._id);
            };
            resultItem.innerHTML = `
              <div class="d-flex justify-content-between align-items-center">
                <div class="card col-2  d-flex p-1 d-none d-sm-flex">
                  <img
                    src="${result.image[0]}"
                    class="card-img-top"
                    alt="${result.name}"
                    loading="lazy"
                  />
                </div>
                <div class="col-12 col-sm-10 ps-2">
                  <h5 class="card-title">${result.name}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="me-sm-3 mb-2 mb-sm-0">
                      <p>Precio: ${formatCurrency(result.price)}</p>
                      <div>${rating(result.rating)}</div>
                    </div>
                    <div class="col text-end">
                      <a
                        href="#staticBackdrop${result._id}"
                        data-bs-toggle="modal"
                        class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2"
                      >
                        Detalles
                        <i class="fa-solid fa-eye"></i>
                      </a>
                      <button
                        class="btn btn-outline-dark btn-custom text-break custom-cart-button mb-2"
                        id="addToCartButtonSearch${result._id}"
                      >
                        Añadir
                        <i id="iconSearch${
                          result._id
                        }" class="fa-solid fa-shopping-cart"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `;
            cardbody!.appendChild(resultItem);
            cardSearch.innerHTML = "";
            cardSearch.appendChild(cardheader);
            cardSearch.appendChild(cardbody);
            searchResultsContainer!.innerHTML = "";
            searchResultsContainer!.appendChild(cardSearch);

            const addToCartButton = document.querySelector(
              `#addToCartButtonSearch${result._id}`
            );
            addToCartButton?.addEventListener("click", addToCart);
            checkAddedToCart("#addToCartButtonSearch", result._id);
          });
        }
        const clearButton = document.querySelector(`#clearSearch`);
        clearButton?.addEventListener("click", clearSearchContext());
      }
    }

    searchResultsContainer!.style.marginTop = 10 + headerHeight + "px";

    adjustCardHeight();
  }
}
