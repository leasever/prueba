import searchProductsByName from "../context/SearchContext";

const recordBtn = document.getElementById("voice-search-button");
const searchInput = document.getElementById("buscar") as HTMLInputElement;

function startRecognitionForSearch() {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "es-ES";

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript
      .toLowerCase()
      .replace(/[.,]/g, "");

    searchInput.value = speechResult;
    triggerSearch();

    const results = searchProductsByName(speechResult);
    if (results.length === 0) {
      leerTexto("No se encontraron resultados de: " + speechResult);
      searchInput.removeAttribute("disabled");
    } else {
      leerTexto("Estos son los resultados de: " + speechResult);
    }
  };

  recognition.onerror = (event) => {
    let errorMessage = "Se ha producido un error en el reconocimiento de voz.";

    if (event.error === "no-speech") {
      errorMessage = "No se detectó ningún habla.";
      leerTexto(errorMessage);
      searchInput.removeAttribute("disabled");
    } else if (event.error === "not-allowed") {
      errorMessage =
        "No se permitió el acceso al micrófono. Asegúrese de habilitar los permisos.";
      leerTexto(errorMessage);
      searchInput.removeAttribute("disabled");
    }

    alert(errorMessage);
  };

  recognition.onend = () => {
    stopRecording();
  };

  recognition.start();

  function stopRecording() {
    recognition.stop();
    recordBtn!.querySelector("p")!.innerHTML = "Escuchar";
    recordBtn!.classList.remove("recording");
  }
}

function triggerSearch() {
  const inputEvent = new Event("input", { bubbles: true });
  searchInput.dispatchEvent(inputEvent);
}

export default function createVoiceSearchButton() {
  recordBtn!.addEventListener("click", () => {
    startRecognitionForSearch();
    recordBtn!.classList.add("recording");
    recordBtn!.querySelector("p")!.innerHTML = "Escuchando...";
    searchInput.setAttribute("disabled", "");
  });
}

function leerTexto(text: string) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 0.9;
  speech.lang = "es-ES";

  window.speechSynthesis.speak(speech);
}
