import { userRegisterContext } from "../context/UserRegisterContext";
import { profileModal } from "../components/ProfileItem";
import { getLocalStorage, getSessionStorage } from "../hooks/useLocalStore";

const activateprofile = document.querySelector<HTMLButtonElement>("#activateProfile")!;
const activatecart = document.querySelector<HTMLButtonElement>("#activateCart")!;

const navhometab = document.querySelector<HTMLButtonElement>("#nav-home-tab")!;
const navprofiletab = document.querySelector<HTMLButtonElement>("#nav-profile-tab")!;

export function validatorUserConnected(){
  activateprofile.addEventListener("click", () => {
    navprofiletab.click();
  });
  navprofiletab.addEventListener("click", () => {
    if (getLocalStorage("users")) userRegisterContext();
    if (getSessionStorage("user")) profileModal(getSessionStorage("user"));    
  })
  activatecart.addEventListener("click", () => {
    navhometab.click();
    if (getLocalStorage("users")) userRegisterContext();
  });
}