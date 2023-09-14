import { shopingCartContext } from "./context/ShopingCartContext";
import "./css/main.css";
import { getLocalStorage } from "./hooks/useLocalStore";
import navigation from "./utilities/navigation";
import { validatorUserConnected } from "./utilities/validatorUser";

const sectloader = document.querySelector<HTMLDivElement>("#loaderSection")!;

document.addEventListener("DOMContentLoaded", () => {

  navigation();
  if (getLocalStorage("carrito")) shopingCartContext();
  validatorUserConnected();
});
window.onload = () => {
  sectloader.setAttribute("style", "visibility:hidden; opacity:0;");
};
