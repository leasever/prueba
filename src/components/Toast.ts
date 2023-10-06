export function showToast(
  title: string,
  message: string,
  options: Record<string, any> = {}
) {
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");
  document.body.appendChild(toastContainer);

  const toastElement = document.createElement("div");
  toastElement.classList.add("toast");
  toastElement.setAttribute("role", "alert");
  toastElement.setAttribute("aria-live", "assertive");
  toastElement.setAttribute("aria-atomic", "true");

  toastElement.innerHTML = `
    <div class="toast-header">
      <strong class="me-auto">${title}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close">      
      </button>
    </div>
    <div class="toast-body">${message}</div>
  `;

  toastContainer.appendChild(toastElement);

  const toastEvent = new CustomEvent("show.bs.toast", {
    detail: { toast: toastElement },
  });

  if (options.delay) {
    setTimeout(() => {
      toastElement.classList.add("show");
      document.dispatchEvent(toastEvent);

      setTimeout(() => {
        toastElement.classList.remove("show");
        document.dispatchEvent(
          new CustomEvent("hidden.bs.toast", {
            detail: { toast: toastElement },
          })
        );
        document.body.removeChild(toastContainer);
      }, options.delay);
    }, 0);
  }
}
