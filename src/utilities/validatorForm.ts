const registerFrom = document.querySelector<HTMLFormElement>("#registerForm")!;
const username = <HTMLInputElement>registerFrom["username"];

const btnlogin = document.querySelector<HTMLButtonElement>("#loginButton")!;
const btnregister = document.querySelector<HTMLButtonElement>("#registerButton")!;
const btnactivelogin = document.querySelector<HTMLLinkElement>("#activeBtnLogin")!;
const btnactiveregister = document.querySelector<HTMLLinkElement>("#activeBtnRegister")!;

const modaltitle = document.querySelector<HTMLHeadingElement>("#modalTitle")!;

export function activateButtonLogin() {
  btnactivelogin.addEventListener("click", () => {
    username.classList.add("visually-hidden");
    btnregister.classList.add("visually-hidden");
    btnactivelogin.classList.add("visually-hidden");
    btnlogin.classList.remove("visually-hidden");
    btnactiveregister.classList.remove("visually-hidden");
    modaltitle.innerText = "Iniciar sesión";
    registerFrom.classList.remove("was-validated")
  });
}

export function activateButtonRegister() {
  btnactiveregister.addEventListener("click", () => {
    username.classList.remove("visually-hidden");
    btnregister.classList.remove("visually-hidden");
    btnactivelogin.classList.remove("visually-hidden");
    btnlogin.classList.add("visually-hidden");
    btnactiveregister.classList.add("visually-hidden");
    modaltitle.innerText = "Registro";
    registerFrom.classList.add("was-validated")
  });
}