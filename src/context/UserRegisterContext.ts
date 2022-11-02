import { User, UserConnected, Purchase } from "../types";
import { v4 } from "uuid";
import { useLocalStorage, getLocalStorage, useSessionStorage } from "../hooks/useLocalStore";
import { encrypt, decrypt } from "../utilities/crypted";
import { activateButtonLogin, activateButtonRegister } from "../utilities/validatorForm";
import { profileModal } from "../components/Profile";

let users: User[] = [];
let purchase: Purchase[] = [];
let userconnected: UserConnected;

const registerFrom = document.querySelector<HTMLFormElement>("#registerForm")!;
const username = <HTMLInputElement>registerFrom["username"];
const email = <HTMLInputElement>registerFrom["email"];
const password = <HTMLInputElement>registerFrom["password"];

const btnlogin = document.querySelector<HTMLButtonElement>("#loginButton")!;
const btnregister = document.querySelector<HTMLButtonElement>("#registerButton")!;

export function userRegisterContext() {
  users = getLocalStorage("users");
}

activateButtonLogin();
activateButtonRegister();

btnregister.addEventListener("click", async (e) => {
  e.preventDefault();
  if (users.find((user) => user.email === email.value)) {
    alert("La cuenta ya está registrada");
  } else {
    if (registerFrom.checkValidity()) {
      const passencrypted = await encrypt(email.value, password.value);
      const userencryted = await encrypt(
        password.value,
        JSON.stringify({
          email: email.value,
          username: username.value,
          password: passencrypted,
          purchase,
        }),
      );
      UserRegister(userencryted);
    }
  }
});

btnlogin.addEventListener("click", (e) => {
  e.preventDefault();
  const checkusers = users.find((user) => user.email === email.value)!;
  loggedIn(password.value, checkusers?.user);
  console.log("login ", password.value, checkusers?.user);
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
    console.log("userdecrypt ", userconnected);
    if (userconnected) {
      console.log("entro al aler de userdecript ", userconnected);
      useSessionStorage<UserConnected>("user", userconnected);
      profileModal(userconnected);
      alert("Bienvenido " + userconnected.username);
      location.reload()
    }
  } catch (error) {
    alert("Usuario y/o contraseña incorrectas");
  }
}
