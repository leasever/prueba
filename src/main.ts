import ProductModal from "./components/ProductModal";
import { shopingCartContext } from "./context/ShopingCartContext";
import "./css/main.css";
import { getLocalStorage } from "./hooks/useLocalStore";
import navigation from "./utilities/navigation";
import preloadImages from "./utilities/preloadImages";
import createVoiceSearchButton from "./utilities/speechRecognition";
import { validatorUserConnected } from "./utilities/validatorUser";
document.addEventListener("DOMContentLoaded", () => {
  navigation();
  if (getLocalStorage("carrito")) shopingCartContext();
  validatorUserConnected();
});

window.onload = () => {
  preloadImages(imageUrlsToPreload)
    .then(() => {
      // Puedes realizar otras acciones después de que las imágenes se hayan precargado
    })
    .catch((error) => {
      console.error("Error al precargar imágenes:", error);
    });
  ProductModal();
  createVoiceSearchButton();
};
const imageUrlsToPreload = [
  "img/about/boutique1.png",
  "img/about/boutique2.png",
];
