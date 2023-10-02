export default function preloadImages(imageUrls: string[]) {
  
  const imagePromises = [];

  for (const imageUrl of imageUrls) {
    const img = new Image();
    img.src = imageUrl;

    const imagePromise = new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    imagePromises.push(imagePromise);
  }

  return Promise.all(imagePromises);
}
