import "./css/main.css";
import { ProductItem } from "../src/components/ProductItem";
import { shopingCartContext } from "./context/ShopingCartContext";
import { getLocalStorage, getSessionStorage } from "./hooks/useLocalStore";
import { userRegisterContext } from "./context/UserRegisterContext";
import { profileModal } from "./components/Profile";
import 'moment/locale/es';

const sectloader = document.querySelector<HTMLDivElement>("#loaderSection")!;

document.addEventListener("DOMContentLoaded", () => {
  ProductItem();
  if (getLocalStorage("carrito")) shopingCartContext();
});
window.onload = () => {
  sectloader.setAttribute("style", "visibility:hidden; opacity:0;");
  if (getLocalStorage("users")) userRegisterContext();
  if (getSessionStorage("user")) profileModal(getSessionStorage("user"));
};
