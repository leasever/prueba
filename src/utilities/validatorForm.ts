import LoginRegisterModal from "../components/LoginModal";

LoginRegisterModal();

const registerForm = document.querySelector<HTMLFormElement>("#registerForm")!;
const username = <HTMLInputElement>registerForm["username"];

const btnlogin = document.querySelector<HTMLButtonElement>("#loginButton")!;
const btnregister =
  document.querySelector<HTMLButtonElement>("#registerButton")!;
const btnactivelogin =
  document.querySelector<HTMLLinkElement>("#activeBtnLogin")!;
const btnactiveregister =
  document.querySelector<HTMLLinkElement>("#activeBtnRegister")!;
const modaltitle = document.querySelector<HTMLHeadingElement>("#modalTitle")!;

export function activateButtonLogin() {
  btnactivelogin.addEventListener("click", toggleLoginForm);
}

export function activateButtonRegister() {
  btnactiveregister.addEventListener("click", toggleRegisterForm);
}

function toggleLoginForm() {
  username.classList.add("visually-hidden");
  btnregister.classList.add("visually-hidden");
  btnactivelogin.classList.add("visually-hidden");
  btnlogin.classList.remove("visually-hidden");
  btnactiveregister.classList.remove("visually-hidden");
  modaltitle.innerText = "Iniciar sesión";
  registerForm.classList.remove("was-validated");
}

function toggleRegisterForm() {
  username.classList.remove("visually-hidden");
  btnregister.classList.remove("visually-hidden");
  btnactivelogin.classList.remove("visually-hidden");
  btnlogin.classList.add("visually-hidden");
  btnactiveregister.classList.add("visually-hidden");
  modaltitle.innerText = "Registro";
  registerForm.classList.add("was-validated");
}

const passwordInput = document.querySelector<HTMLInputElement>("#password")!;
const togglePassword = document.querySelector("#togglePassword")!;

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
