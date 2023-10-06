import { paymentRegister } from "../context/PaymentRegister";
import {
  checkAddedToCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  removeFromCart,
} from "../context/ShopingCartContext";
import productData from "../data/products.json";
import { getSessionStorage } from "../hooks/useLocalStore";
import { Cart, ProductEntry } from "../types";
import { formatCurrency } from "../utilities/utils";
import NavBar from "./NavBar";
import { showToast } from "./Toast";
NavBar();

const cartcontainer = document.querySelector<HTMLDivElement>("#cartContainer")!;
const spanTotal = document.querySelector<HTMLSpanElement>("#precioTotal")!;
const btnPayment = document.querySelector<HTMLButtonElement>("#btnPay")!;
const countItems = document.querySelector<HTMLSpanElement>("#contadorCarrito")!;
const loginregistermodal = document.querySelector<HTMLButtonElement>(
  "#loginRegisterModal"
)!;
const options = {
  delay: 5000,
};
const products: ProductEntry[] = productData as ProductEntry[];

export function CartItem(cartList: Cart[]) {
  let total: number = 0;
  let count: number = 0;

  if (cartList.length === 0) {
    cartcontainer.innerHTML = ``;
    spanTotal.innerText = "DSS";
    btnPayment.innerText = "Médios de pago";
    btnPayment.classList.add("disabled");
    countItems.innerText = "0";
  }

  cartList.map((item) => {
    const product = products.find((i) => i._id === item._id)!;
    count += item.quantity;
    countItems.innerText = count.toString();

    /*** container item product ***/
    const divItemProduct = document.createElement("div");
    divItemProduct.className = "d-flex align-items-center gap-2 mb-2";

    /**image de product item ***/
    const enlaceModal = document.createElement("a");
    enlaceModal.href = "#staticBackdrop" + product._id;
    enlaceModal.setAttribute("data-bs-toggle", "modal");

    /*** product image ***/
    const imgProduct = document.createElement("img");
    imgProduct.src = product.image[0];
    imgProduct.className = "img-cart img-thumbnail";

    const divWrap = document.createElement("div");
    divWrap.className =
      "d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";

    const divDetailProduct = document.createElement("div");
    divDetailProduct.className = "me-auto";

    /*** product name ***/
    const divProductName = document.createElement("div");
    divProductName.innerText = product!.name + " ";
    divProductName.className = "justify-content-start ";

    /*** product quantity ***/
    const spanQuantity = document.createElement("span");
    spanQuantity.className = "text-muted quantity-cart";
    spanQuantity.innerText = "x " + item.quantity.toString();

    /*** product price ***/
    const divPrice = document.createElement("div");
    divPrice.className = "text-muted price-cart";
    divPrice.innerText = formatCurrency(product.price).toString();

    /*** product subtotal ***/
    const divSubTotal = document.createElement("div");
    divSubTotal.innerText = formatCurrency(
      product.price * item.quantity
    ).toString();
    total += product.price * item.quantity;

    const divbtns = document.createElement("div");
    divbtns.className = "d-flex flex-wrap gap-1 col-12";

    /*** button decrease ***/
    const btnDecrease = document.createElement("button");
    btnDecrease.type = "button";
    btnDecrease.className = "btn btn-outline-primary icon-cart";
    btnDecrease.addEventListener("click", (): void => {
      decreaseCartQuantity(item._id);
    });
    const iconDecrease = document.createElement("i");
    iconDecrease.className = "fas fa-minus";

    /*** button remove item ***/
    const btnRemove = document.createElement("button");
    btnRemove.type = "button";
    btnRemove.className = "btn btn-danger icon-cart";
    btnRemove.addEventListener("click", () => {
      if (confirm("Desea eliminar el producto: " + product?.name)) {
        removeFromCart(item._id);
        checkAddedToCart("#addToCartButtonSearch", item._id);
      }
      return;
    });
    const iconRemove = document.createElement("i");
    iconRemove.className = "fas fa-trash-alt";

    /*** button increase ***/
    const btnIncrease = document.createElement("button");
    btnIncrease.type = "button";
    btnIncrease.className = "btn btn-outline-primary icon-cart";
    btnIncrease.addEventListener("click", () => {
      increaseCartQuantity(item._id);
    });
    const iconIncrease = document.createElement("i");
    iconIncrease.className = "fas fa-plus";

    /*** insert html ***/
    btnDecrease.append(iconDecrease);
    btnRemove.append(iconRemove);
    btnIncrease.append(iconIncrease);

    if (item.quantity > 1) {
      divProductName.append(spanQuantity);
      divbtns.append(btnDecrease);
    }

    divDetailProduct.append(divProductName);
    divDetailProduct.append(divPrice);

    divbtns.append(btnRemove);
    divbtns.append(btnIncrease);

    divWrap.append(divDetailProduct);
    divWrap.append(divSubTotal);
    divWrap.append(divbtns);

    enlaceModal.append(imgProduct);
    divItemProduct.append(enlaceModal);
    divItemProduct.append(divWrap);

    spanTotal.innerText = "Total " + formatCurrency(total).toString();

    btnPayment.innerText = "Pagar";
    btnPayment.classList.remove("disabled");

    return cartcontainer?.append(divItemProduct);
  });
}
btnPayment.addEventListener("click", () => {
  if (getSessionStorage("user")) {
    paymentRegister();
  } else {
    loginregistermodal.click();
    showToast(
      "⚠️ Registro e Ingreso",
      "Regístrese e inicie sesión para recibir su factura y gestionar sus pedidos.",
      options
    );
  }
});
