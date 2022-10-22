import "./css/main.css";
import { skityTop } from "./utilities/SkityTop";
import { ProductItem } from "../src/components/ProductItem";
import { shopingCartContext } from "./context/ShopingCartContext";
import { getLocalStorage } from "./hooks/useLocalStore";

window.onscroll = function () {
  skityTop();
};
ProductItem();
document.addEventListener("DOMContentLoaded", () => {   
  if (getLocalStorage("carrito")) {
    shopingCartContext();
  }
});


