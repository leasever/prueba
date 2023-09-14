import { Cart } from "../types";
import { CartItem } from "../components/CartItem";
import { useLocalStorage, getLocalStorage } from "../hooks/useLocalStore";

let cartList: Cart[] = [];

const cartcontainer = document.querySelector<HTMLDivElement>("#cartContainer")!;

export function shopingCartContext() {
  cartList = getLocalStorage("carrito");
  updateCart(cartList);
  cartList.forEach((item) => {
    if (item?._id) {
      checkIconAdded(item._id, true);
    }
  });
}

export function increaseCartQuantity(_id: number) {
  if (cartList.find((item) => item._id === _id) == null) {
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

export function checkIconAdded(_id: number, condition: boolean) {
  const iconAdded = document.querySelector<HTMLButtonElement>("#icon" + _id)!;
  if (condition) {
    iconAdded.className = "fas fa-check-circle ms-1";
  } else {
    iconAdded.className = "fa-solid fa-shopping-cart";
  }
}

function updateCart(cartList: Cart[]) {
  cartcontainer.innerHTML = ``;
  CartItem(cartList);
  useLocalStorage<Cart[]>("carrito", cartList);
}
