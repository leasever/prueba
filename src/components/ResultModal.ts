export default function ResultsModal() {
  return (document.getElementById("resultsModalSection")!.innerHTML += ` <div
      class="modal fade"
      id="resultsModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Resultados de la búsqueda por voz
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body" id="modal-body">
            <!-- Aquí se mostrarán los resultados -->
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-dark btn-custom"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>`);
}
