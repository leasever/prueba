import ProductModal from "./components/ProductModal";
import { shopingCartContext } from "./context/ShopingCartContext";
import "./css/main.css";
import { getLocalStorage } from "./hooks/useLocalStore";
import navigation from "./utilities/navigation";
import preloadImages from "./utilities/preloadImages";
import createVoiceSearchButton from "./utilities/speechRecognition";
import { sectLoader } from "./utilities/utils";
import { validatorUserConnected } from "./utilities/validatorUser";

document.addEventListener("DOMContentLoaded", () => {
  navigation();
  if (getLocalStorage("carrito")) shopingCartContext();
  validatorUserConnected();
});

window.onload = () => {
  sectLoader();
  preloadImages();
  ProductModal();
  createVoiceSearchButton();
};
