import { UserConnected, User } from "../types";
import { profileDetailPurchase } from "./PofileDetail";
import {
  removeSessionStorage,
  getLocalStorage,
  useLocalStorage,
} from "../hooks/useLocalStore";

const $$ = (selector: string) => document.createElement(selector);

const accordionitems =
  document.querySelector<HTMLDivElement>("#accordionItems")!;
const users: User[] = getLocalStorage("users");

export function profileModal(userconnected: UserConnected) {
  accordionitems.innerHTML = ``;

  const divaccordion = $$("div");
  divaccordion.id = "divAccordion";

  const cardprofile = $$("div");
  cardprofile.className = "card mb-2";

  const cardheader = $$("div");
  cardheader.className = "card-header d-flex flex-row justify-content-between";

  const username = $$("p");
  username.innerText = "Hola, " + userconnected.username;
  const singoff = $$("a") as HTMLLinkElement;
  singoff.href = "#";
  singoff.innerText = "Cerrar sesión";
  singoff.addEventListener("click", (e) => {
    e.preventDefault();
    removeSessionStorage("user");
    location.reload();
  });

  const listgroup = $$("ul");
  listgroup.className = "list-group list-group-flush";

  const email = $$("li");
  email.className = "list-group-item";
  email.innerText = userconnected.email;

  const totalshopping = $$("li");
  totalshopping.className =
    "list-group-item d-flex flex-row justify-content-between";

  const purchaselenth = $$("p");
  purchaselenth.innerText =
    "Compras realizadas: " + userconnected.purchase.length;

  const deleteaccount = $$("button") as HTMLButtonElement;
  deleteaccount.type = "button";
  deleteaccount.className = "btn btn-danger icon-cart";
  deleteaccount.title = "Eliminar cuenta";

  const iconRemove = $$("i");
  iconRemove.className = "fas fa-trash-alt";
  deleteaccount.append(iconRemove);
  deleteaccount.addEventListener("click", () => {
    if (confirm("¿Quieres borrar este perfil y sus datos?")) {
      let updateusers = users.filter(
        (user) => user.email !== userconnected.email
      );
      useLocalStorage("users", updateusers);
      removeSessionStorage("user");
      location.reload();
    }
    return null;
  });
  totalshopping.append(purchaselenth, deleteaccount);
  /*** insert html ***/
  cardheader.append(username, singoff);
  cardprofile.append(cardheader);
  cardprofile.append(listgroup);
  listgroup.append(email, totalshopping);
  divaccordion.append(cardprofile);
  accordionitems.append(divaccordion);
  if (userconnected.purchase.length > 0) {
    profileDetailPurchase(userconnected);
  }
}
