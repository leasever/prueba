import { shopingCartContext } from "../context/ShopingCartContext";
import { getLocalStorage } from "../hooks/useLocalStore";
import AboutPage from "../views/AboutPage";
import HomePage from "../views/HomePage";
import ProductsPage from "../views/ProductsPage";

export default function navigation() {
  const mainContent = document.getElementById("main-content");
  const navLinks = document.querySelectorAll(".nav-menu");

  function homePage() {
    HomePage();
    if (getLocalStorage("carrito")) shopingCartContext();
  }

  function aboutPage() {
    AboutPage();
  }

  function productsPage() {
    ProductsPage();
    if (getLocalStorage("carrito")) shopingCartContext();
  }

  function loadPage(pageFunction: () => void) {
    mainContent!.innerHTML = "";
    pageFunction();
  }

  function handleNavLinkClick(e: Event) {
    e.preventDefault();
    const targetSection = (e.currentTarget as HTMLElement)
      .getAttribute("href")!
      .substring(1);

    navLinks.forEach((link) => {
      link.classList.remove("selected");
    });

    switch (targetSection) {
      case "homePage":
        loadPage(homePage);
        break;
      case "aboutPage":
        loadPage(aboutPage);
        break;
      case "productPage":
        loadPage(productsPage);
        break;
      default:
        break;
    }

    (e.currentTarget as HTMLElement).classList.add("selected");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  navLinks[0].classList.add("selected");
  loadPage(HomePage);
}
