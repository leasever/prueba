import { profileModal } from "../components/ProfileItem";
import { userRegisterContext } from "../context/UserRegisterContext";
import { getLocalStorage, getSessionStorage } from "../hooks/useLocalStore";

const $ = <T extends HTMLElement>(selector: string) =>
  document.querySelector<T>(selector);
  
const activateprofile = $<HTMLButtonElement>("#activateProfile")!;
const activatecart = $<HTMLButtonElement>("#activateCart")!;

const navhometab = $<HTMLButtonElement>("#nav-home-tab")!;
const navprofiletab = $<HTMLButtonElement>("#nav-profile-tab")!;

export function validatorUserConnected() {
  activateprofile.addEventListener("click", () => {
    navprofiletab.click();
  });
  navprofiletab.addEventListener("click", () => {
    if (getLocalStorage("users")) userRegisterContext();
    if (getSessionStorage("user")) profileModal(getSessionStorage("user"));
  });
  activatecart.addEventListener("click", () => {
    navhometab.click();
    if (getLocalStorage("users")) userRegisterContext();
  });
}
