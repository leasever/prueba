export default function rating(rating: number) {
  const starIcons = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      starIcons.push("fas fa-star");
    } else if (rating >= i - 0.5) {
      starIcons.push("fas fa-star-half-alt");
    } else {
      starIcons.push("far fa-star");
    }
  }
  return starIcons.map((iconClass) => `<i class="${iconClass}"></i>`).join("");
}
