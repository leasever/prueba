import { Cart, User, UserConnected } from "../types";
import {
  getSessionStorage,
  getLocalStorage,
  useSessionStorage,
  useLocalStorage,
} from "../hooks/useLocalStore";
import { encrypt, decrypt } from "../utilities/crypted";
import { v4 } from "uuid";
import { profileModal } from "../components/ProfileItem";
import { shopingCartContext } from "./ShopingCartContext";

const navprofiletab =
  document.querySelector<HTMLButtonElement>("#nav-profile-tab")!;
export async function paymentRegister() {
  const cartlist: Cart[] = getLocalStorage("carrito");
  const userconnected: UserConnected = getSessionStorage("user");
  const users: User[] = getLocalStorage("users");

  /*** user connected ***/
  userconnected.purchase.push({
    _id: v4(),
    date: new Date(),
    items: cartlist,
  });

  useSessionStorage<UserConnected>("user", userconnected);
  navprofiletab.click();

  /*** user update ***/
  const hash = await decrypt(userconnected.email, userconnected._id);
  const userencryted = await encrypt(
    hash,
    JSON.stringify({
      email: userconnected.email,
      username: userconnected.username,
      _id: userconnected._id,
      purchase: userconnected.purchase,
    })
  );

  const updUsers = users.map((user) => {
    if (user.email === userconnected.email) {
      return { ...user, user: userencryted };
    } else {
      return user;
    }
  });

  updateUsers(updUsers);
  alert("Gracias por su compra " + userconnected.username);
  profileModal(userconnected);
}

function updateUsers(users: User[]) {
  const customCartButtons = document.querySelectorAll(".custom-cart-button");

  useLocalStorage<User[]>("users", users);
  useLocalStorage<Cart[]>("carrito", []);
  shopingCartContext();

  customCartButtons.forEach((button) => {
    const _id = button.id.replace("addToCartButton", "");
    button.innerHTML = `Añadir <i id="icon${_id}" class="fa-solid fa-shopping-cart"></i>`;
  });
}
