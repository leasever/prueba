const header = document.querySelector<HTMLDivElement>("#myHeader")!;
const sticky = header.offsetTop;

export function skityTop(): void {
  if (window.pageYOffset > sticky) {
    header.classList.remove("sub-menu");
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
    header.classList.add("sub-menu");
  }
}
