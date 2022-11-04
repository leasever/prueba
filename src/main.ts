import "./css/main.css";
import { ProductItem } from "../src/components/ProductItem";
import { shopingCartContext } from "./context/ShopingCartContext";
import { getLocalStorage } from "./hooks/useLocalStore";
import { validatorUserConnected } from "./utilities/validatorUser";

const sectloader = document.querySelector<HTMLDivElement>("#loaderSection")!;

document.addEventListener("DOMContentLoaded", () => {
  ProductItem();
  if (getLocalStorage("carrito")) shopingCartContext();
  validatorUserConnected()
});
window.onload = () => {
  sectloader.setAttribute("style", "visibility:hidden; opacity:0;");
};


