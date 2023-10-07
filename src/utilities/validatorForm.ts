import LoginRegisterModal from "../components/LoginModal";

LoginRegisterModal();
const $ = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);

const registerForm = $<HTMLFormElement>("#registerForm")!;
const username = <HTMLInputElement>registerForm["username"];
const passwordInput = $<HTMLInputElement>("#password")!;
const togglePassword = $("#togglePassword")!;
const btnlogin = $<HTMLButtonElement>("#loginButton")!;
const btnregister = $<HTMLButtonElement>("#registerButton")!;
const btnactivelogin = $<HTMLLinkElement>("#activeBtnLogin")!;
const btnactiveregister = $<HTMLLinkElement>("#activeBtnRegister")!;
const modaltitle = $<HTMLHeadingElement>("#modalTitle")!;

function hideElement(element: HTMLElement) {
  element.classList.add("visually-hidden");
}

function showElement(element: HTMLElement) {
  element.classList.remove("visually-hidden");
}

function toggleFormElements() {
  hideElement(username);
  hideElement(btnregister);
  hideElement(btnactivelogin);
  showElement(btnlogin);
  showElement(btnactiveregister);
}

function toggleFormTitle(title: string) {
  modaltitle.innerText = title;
}

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  }
});

export function activateButtonLogin() {
  btnactivelogin.addEventListener("click", () => {
    toggleFormElements();
    toggleFormTitle("Iniciar sesión");
  });
}

export function activateButtonRegister() {
  btnactiveregister.addEventListener("click", () => {
    showElement(username);
    showElement(btnregister);
    showElement(btnactivelogin);
    hideElement(btnlogin);
    hideElement(btnactiveregister);
    toggleFormTitle("Registro");
    registerForm.classList.add("was-validated");
  });
}
