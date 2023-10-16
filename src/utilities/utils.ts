const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATER.format(number);
}

export function dateSpanish(date: Date) {
  const datespanish = new Date(date).toLocaleDateString("es-ES", {
    weekday: "short",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return datespanish;
}

export function sectLoader() {
  const sectloader = document.querySelector<HTMLDivElement>("#loaderSection")!;
  sectloader.setAttribute("style", "visibility:hidden; opacity:0;");
}

