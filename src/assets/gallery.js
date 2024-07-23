// gallery.js
const importAllImages = import.meta.glob('@/assets/gallery/*.{png,jpg,jpeg,svg}');

export const loadGallery = async () => {
  const imageEntries = [];

  for (const path in importAllImages) {
    const module = await importAllImages[path]();
    const fileName = path.split('/').pop().split('.').shift(); // Extract the file name without extension
    imageEntries.push({ fileName, image: module.default });
  }

  // Urutkan berdasarkan nama file yang diekstrak
  imageEntries.sort((a, b) => {
    const numA = parseInt(a.fileName.replace('image', ''));
    const numB = parseInt(b.fileName.replace('image', ''));
    return numA - numB;
  });

  // Hanya kembalikan gambar
  return imageEntries.map(entry => ({ image: entry.image }));
};
