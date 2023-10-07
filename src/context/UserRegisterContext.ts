import { User, UserConnected, Purchase } from "../types";
import { v4 } from "uuid";
import {
  useLocalStorage,
  getLocalStorage,
  useSessionStorage,
} from "../hooks/useLocalStore";
import { encrypt, decrypt } from "../utilities/crypted";
import {
  activateButtonLogin,
  activateButtonRegister,
} from "../utilities/validatorForm";
import { profileModal } from "../components/ProfileItem";
import { showToast } from "../components/Toast";

let users: User[] = [];
let purchase: Purchase[] = [];
let userconnected: UserConnected;
const $ = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);

const registerFrom = $<HTMLFormElement>("#registerForm")!;
const username = <HTMLInputElement>registerFrom["username"];
const email = <HTMLInputElement>registerFrom["email"];
const password = <HTMLInputElement>registerFrom["password"];

const btnlogin = $<HTMLButtonElement>("#loginButton")!;
const btnregister = $<HTMLButtonElement>("#registerButton")!;
const btnclosemodal = $<HTMLButtonElement>("#formModalClose")!;

const options = {
  delay: 3000,
};

export function userRegisterContext() {
  users = getLocalStorage("users");
}

activateButtonLogin();
activateButtonRegister();

btnregister.addEventListener("click", async (e) => {
  e.preventDefault();
  if (users.find((user) => user.email === email.value)) {
    showToast(
      "⚠️ Registro de usuario",
      `El correo electrónico ${email.value} ya ha sido registrado previamente.`,
      options
    );
  } else {
    if (registerFrom.checkValidity()) {
      const passencrypted = await encrypt(email.value, password.value);
      const userencryted = await encrypt(
        password.value,
        JSON.stringify({
          email: email.value,
          username: username.value,
          _id: passencrypted,
          purchase,
        })
      );
      UserRegister(userencryted);
    }
  }
});

btnlogin.addEventListener("click", (e) => {
  e.preventDefault();
  const checkusers = users.find((user) => user.email === email.value)!;
  if (checkusers) {
    loggedIn(password.value, checkusers.user);
  } else {
    showToast(
      "❌ Error",
      "El correo electrónico y/o la contraseña son incorrectos",
      options
    );
  }
});

function UserRegister(userencryted: string) {
  let _id = v4();
  users.push({
    _id,
    email: email.value,
    user: userencryted,
  });
  useLocalStorage<User[]>("users", users);
  loggedIn(password.value, userencryted);
}

async function loggedIn(password: string, user: string) {
  try {
    userconnected = JSON.parse(await decrypt(password, user));
    if (userconnected) {
      useSessionStorage<UserConnected>("user", userconnected);
      showToast(
        "✅ Sesión iniciada",
        `¡Bienvenido, ${userconnected.username}!`,
        options
      );

      btnclosemodal.click();
      profileModal(userconnected);
    }
  } catch (error) {
    showToast(
      "❌ Error",
      "El correo electrónico y/o la contraseña son incorrectos",
      options
    );
  }
}
