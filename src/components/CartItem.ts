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

const $ = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);
const $$ = (selector: string) => document.createElement(selector);

const cartcontainer = $<HTMLDivElement>("#cartContainer")!;
const spanTotal = $<HTMLSpanElement>("#precioTotal")!;
const btnPayment = $<HTMLButtonElement>("#btnPay")!;
const countItems = $<HTMLSpanElement>("#contadorCarrito")!;
const loginregistermodal = $<HTMLButtonElement>("#loginRegisterModal")!;

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
    const divItemProduct = $$("div");
    divItemProduct.className = "d-flex align-items-center gap-2 mb-2";

    /**image de product item ***/
    const enlaceModal = $$("a") as HTMLLinkElement;
    enlaceModal.href = "#staticBackdrop" + product._id;
    enlaceModal.setAttribute("data-bs-toggle", "modal");

    /*** product image ***/
    const imgProduct = $$("img") as HTMLImageElement;
    imgProduct.src = product.image[0];
    imgProduct.className = "img-cart img-thumbnail";

    const divWrap = $$("div");
    divWrap.className =
      "d-flex flex-wrap justify-content-between w-100 gap-2 me-auto";

    const divDetailProduct = $$("div");
    divDetailProduct.className = "me-auto";

    /*** product name ***/
    const divProductName = $$("div");
    divProductName.innerText = product!.name + " ";
    divProductName.className = "justify-content-start ";

    /*** product quantity ***/
    const spanQuantity = $$("span");
    spanQuantity.className = "text-muted quantity-cart";
    spanQuantity.innerText = "x " + item.quantity.toString();

    /*** product price ***/
    const divPrice = $$("div");
    divPrice.className = "text-muted price-cart";
    divPrice.innerText = formatCurrency(product.price).toString();

    /*** product subtotal ***/
    const divSubTotal = $$("div");
    divSubTotal.innerText = formatCurrency(
      product.price * item.quantity
    ).toString();
    total += product.price * item.quantity;

    const divbtns = $$("div");
    divbtns.className = "d-flex flex-wrap gap-1 col-12";

    /*** button decrease ***/
    const btnDecrease = $$("button") as HTMLButtonElement;
    btnDecrease.type = "button";
    btnDecrease.className = "btn btn-outline-primary icon-cart";
    btnDecrease.addEventListener("click", (): void => {
      decreaseCartQuantity(item._id);
    });
    const iconDecrease = $$("i");
    iconDecrease.className = "fas fa-minus";

    /*** button remove item ***/
    const btnRemove = $$("button") as HTMLButtonElement;
    btnRemove.type = "button";
    btnRemove.className = "btn btn-danger icon-cart";
    btnRemove.addEventListener("click", () => {
      if (confirm("Desea eliminar el producto: " + product?.name)) {
        removeFromCart(item._id);
        checkAddedToCart("#addToCartButtonSearch", item._id);
      }
      return;
    });
    const iconRemove = $$("i");
    iconRemove.className = "fas fa-trash-alt";

    /*** button increase ***/
    const btnIncrease = $$("button") as HTMLButtonElement;
    btnIncrease.type = "button";
    btnIncrease.className = "btn btn-outline-primary icon-cart";
    btnIncrease.addEventListener("click", () => {
      increaseCartQuantity(item._id);
    });
    const iconIncrease = $$("i");
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
      "⚠️ Registro o Ingreso ",
      "Regístrese o inicie sesión para recibir su factura y gestionar sus pedidos.",
      options
    );
  }
});
