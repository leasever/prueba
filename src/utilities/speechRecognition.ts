import { ProductEntry } from "../types";
import productData from "../data/products.json";
import { formatCurrency } from "./formatCurrency";
import rating from "./rating";
import { increaseCartQuantity } from "../context/ShopingCartContext";

const recordBtn = document.getElementById("voice-search-button");
const titleModal = document.getElementById(
  "exampleModalLabel"
) as HTMLHeadingElement;

let recording = false;
let recognizedWords: string[] = [];

function showResultsInModal(results: ProductEntry[]) {
  const modalButton = document.getElementById(
    "modalButton"
  ) as HTMLButtonElement;
  const modalBody = document.getElementById("modal-body");
  modalBody!.innerHTML = "";

  if (results.length === 0) {
    modalBody!.innerHTML = "<p>No se encontraron resultados.</p>";
  } else {
    results.forEach((result) => {
      const resultItem = document.createElement("div");
      resultItem.classList.add("result-item");
      const addToCart = () => {
        increaseCartQuantity(result._id);
      };
      resultItem.innerHTML = `
        <div class="row border-bottom mb-3 pb-3">
            <div class="col-12 col-sm-2 d-flex align-items-center justify-content-center mb-2 mb-sm-0">
                <img src="${result.image[0]}" class="card-img-top" alt="${
        result.name
      }" loading="lazy"/>
            </div>
            
            <div class="col-12 col-sm-10">
                <h5 class="card-title">${result.name}</h5>
                <div class="d-flex justify-content-between align-items-center">
                <div class="me-sm-3 mb-2 mb-sm-0">
                    <p>Precio: ${formatCurrency(result.price)}</p>
                    <div>${rating(result.rating)}</div>
                </div>
                <button class="btn btn-outline-dark btn-custom text-break custom-cart-button" id="addToCartButtonSearch${
                  result._id
                }">
                    Añadir 
                    <i id="iconSearch${
                      result._id
                    }" class="fa-solid fa-shopping-cart"></i>
                    </button>
                </div>        
            </div>
            <div class="d-sm-flex justify-content-between align-items-center">
                <p>${result.description}</p>
            </div>  
        </div> `;
      modalBody!.appendChild(resultItem);

      const addToCartButton = document.querySelector(
        `#addToCartButtonSearch${result._id}`
      );

      addToCartButton?.addEventListener("click", addToCart);
    });
  }

  modalButton.click();
}

function startRecognitionForSearch() {
  if (recording) {
    return;
  }

  recording = true;
  recognizedWords = [];
  titleModal.innerText = "Resultados para:";

  if ("webkitSpeechRecognition" in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = "es-ES";

    recognition.onstart = () => {
      recognizedWords = [];
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript
        .toLowerCase()
        .replace(/[.,]/g, "");

      const words = speechResult.split(" ");

      recognizedWords = words;
      titleModal.innerText = `Resultados para: ${recognizedWords.join(" ")}`;
    };

    recognition.onend = () => {
      if (recognizedWords.length === 0) {
        showResultsInModal([]);
      } else {
        const matchingProducts = productData.filter((product) => {
          return recognizedWords.every((word) =>
            product.name.toLowerCase().includes(word)
          );
        });

        showResultsInModal(matchingProducts);
      }

      stopRecording();
    };

    recognition.start();

    function stopRecording() {
      recognition.stop();
      recordBtn!.querySelector!("p")!.innerHTML = "Escuchar";
      recordBtn!.classList.remove("recording");
      recording = false;
    }
  } else {
    recording = false;

    alert(
      "Tu navegador no soporta la Web Speech API. Utiliza un navegador compatible como Chrome."
    );
  }
}

export default function createVoiceSearchButton() {
  recordBtn!.addEventListener("click", () => {
    startRecognitionForSearch();
    recordBtn!.classList.add("recording");
    recordBtn!.querySelector!("p")!.innerHTML = "Escuchando...";
  });
}
