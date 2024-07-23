// Import all images from the gallery folder
const importAllImages = import.meta.glob('@/assets/gallery/*.{png,jpg,jpeg,svg}');

// Function to load all gallery images
export const loadGallery = async () => {
  const imageEntries = [];

  // Iterate over each image path
  for (const path in importAllImages) {
    // Import the image module
    const module = await importAllImages[path]();
    // Extract the file name without extension
    const fileName = path.split('/').pop().split('.').shift(); 
    // Add the file name and image to the image entries array
    imageEntries.push({ fileName, image: module.default });
  }

  // Sort the image entries by file name (assuming they are named image1, image2, etc.)
  imageEntries.sort((a, b) => {
    const numA = parseInt(a.fileName.replace('image', ''));
    const numB = parseInt(b.fileName.replace('image', ''));
    return numA - numB;
  });

  // Return only the image data
  return imageEntries.map(entry => ({ image: entry.image }));
};
