import ProductModal from "./components/ProductModal";
import "./css/main.css";
import navigation from "./utilities/navigation";
import preloadImages from "./utilities/preloadImages";
import createVoiceSearchButton from "./utilities/speechRecognition";
import { sectLoader } from "./utilities/utils";
import { validatorUserConnected } from "./utilities/validatorUser";

document.addEventListener("DOMContentLoaded", () => {
  navigation();
});

window.onload = () => {
  sectLoader();
  validatorUserConnected();
  preloadImages();
  ProductModal();
  createVoiceSearchButton();
};
