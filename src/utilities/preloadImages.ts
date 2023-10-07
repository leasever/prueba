const imageUrlsToPreload = [
  "img/about/boutique1.png",
  "img/about/boutique2.png",
];

export default function preloadImages() {
  const imagePromises = [];

  for (const imageUrl of imageUrlsToPreload) {
    const img = new Image();
    img.src = imageUrl;

    const imagePromise = new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
    });

    imagePromises.push(imagePromise);
  }

  Promise.all(imagePromises);
}
