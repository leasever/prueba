import { CartItem } from "../components/CartItem";
import { useLocalStorage, getLocalStorage } from "../hooks/useLocalStore";

import { Cart } from "../types";
let cartList: Cart[] = [];

const $ = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);

const cartcontainer = $<HTMLDivElement>("#cartContainer")!;

export function shopingCartContext() {
  cartList = getLocalStorage("carrito");
  updateCart(cartList);
}

export function increaseCartQuantity(_id: number) {
  if (cartList?.find((item) => item._id === _id) == null) {
    cartList = [...cartList, { _id, quantity: 1 }];
  } else {
    cartList.map((item) => {
      if (item._id === _id) {
        item.quantity += 1;
        return { ...item, quantity: item.quantity };
      } else {
        return item;
      }
    });
  }
  updateCart(cartList);
  checkIconAdded(_id, true);
}

export function decreaseCartQuantity(_id: number) {
  if (cartList.find((item) => item._id === _id)?.quantity === 1) {
    cartList = cartList.filter((item) => item._id !== _id);
    checkIconAdded(_id, false);
  } else {
    cartList.map((item) => {
      if (item._id === _id) {
        item.quantity -= 1;
        return { ...item, quantity: item.quantity };
      } else {
        return item;
      }
    });
  }
  updateCart(cartList);
}

export function removeFromCart(_id: number) {
  cartList = cartList.filter((item) => item._id !== _id);
  updateCart(cartList);
  checkIconAdded(_id, false);
}

function checkIconAdded(_id: number, condition: boolean) {
  const iconAdded = $<HTMLButtonElement>("#addToCartButton" + _id)!;
  if (condition) {
    iconAdded.setAttribute("disabled", "");
    iconAdded.innerText = `Añadido ✅`;
  } else {
    iconAdded.removeAttribute("disabled");
    iconAdded.innerText = `Añadir 🛒`;
  }
}

function updateCart(cartList: Cart[]) {
  cartcontainer.innerHTML = ``;
  CartItem(cartList);
  useLocalStorage<Cart[]>("carrito", cartList);
}

export function checkAddedToCart(buttonName: string, _id: number) {
  updateCart(cartList);
  cartList = getLocalStorage("carrito");
  const iconAdded = $<HTMLButtonElement>(`${buttonName + _id}`)!;
  if (iconAdded != null && cartList != null) {
    iconAdded.removeAttribute("disabled");
    iconAdded.innerText = `Añadir 🛒`;
    cartList.map((item) => {
      if (item?._id === _id) {
        iconAdded.setAttribute("disabled", "");
        iconAdded.innerText = `Añadido ✅`;
      }
    });
  }
}
