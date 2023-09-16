import ProductModal from "./components/ProductModal";
import { shopingCartContext } from "./context/ShopingCartContext";
import "./css/main.css";
import { getLocalStorage } from "./hooks/useLocalStore";
import navigation from "./utilities/navigation";
import createVoiceSearchButton from "./utilities/speechRecognition";
import { validatorUserConnected } from "./utilities/validatorUser";

const sectloader = document.querySelector<HTMLDivElement>("#loaderSection")!;

document.addEventListener("DOMContentLoaded", () => {
  navigation();
  if (getLocalStorage("carrito")) shopingCartContext();
  validatorUserConnected();
});

window.onload = () => {
  sectloader.setAttribute("style", "visibility:hidden; opacity:0;");
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
function preloadImages(imageUrls: string[]) {
  const imagePromises = [];

  for (const imageUrl of imageUrls) {
    const img = new Image();
    img.src = imageUrl;

    const imagePromise = new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    imagePromises.push(imagePromise);
  }

  return Promise.all(imagePromises);
}
