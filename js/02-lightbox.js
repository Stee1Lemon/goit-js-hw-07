import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

let finalGallery = "";

createFinalGallery(galleryItems);

function createFinalGallery(arrayImages) {
  createGalleryMatCap(arrayImages);
  refs.galleryEl.insertAdjacentHTML("beforeend", finalGallery);
}

function createGalleryMatCap(arrayImages) {
  const galleryMatCap = [];
  arrayImages.map((image) => {
    const imageEl = `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
            </a>
         </li>`;
    galleryMatCap.push(imageEl);
  });
  finalGallery = galleryMatCap.join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
