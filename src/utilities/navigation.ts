import { shopingCartContext } from "../context/ShopingCartContext";
import { getLocalStorage } from "../hooks/useLocalStore";

export default function navigation() {
  const mainContent = document.getElementById("main-content");
  const navLinks = document.querySelectorAll(".nav-menu");

  function loadPage(pageName: string) {
    mainContent!.innerHTML = "";
    switch (pageName) {
      case "homePage":
        import("../views/HomePage").then((module) => {
          module.default();
          markInitialLink(pageName);
        });
        break;
      case "aboutPage":
        import("../views/AboutPage").then((module) => {
          module.default();
          markInitialLink(pageName);
        });
        break;
      case "productPage":
        import("../views/ProductsPage").then((module) => {
          module.default();
          markInitialLink(pageName);
        });
        break;
      default:
        history.pushState(null, "", "/homePage");
        loadPage("homePage");
        break;
    }

    if (getLocalStorage("carrito")) {
      shopingCartContext();
    }
  }

  function handleNavLinkClick(e: Event) {
    e.preventDefault();
    const targetSection = (e.currentTarget as HTMLElement)
      .getAttribute("href")!
      .substring(1);

    navLinks.forEach((link) => {
      link.classList.remove("selected");
    });

    history.pushState(null, "", `/${targetSection}`);

    loadPage(targetSection);

    (e.currentTarget as HTMLElement).classList.add("selected");
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavLinkClick);
  });

  function markInitialLink(pageName: string) {
    const initialLink = document.querySelector(`[href="/${pageName}"]`);
    if (initialLink) {
      initialLink.classList.add("selected");
    }
  }

  const initialPage = window.location.pathname.substr(1);
  loadPage(initialPage);
}
