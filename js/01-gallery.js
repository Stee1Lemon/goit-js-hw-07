import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

let finalGallery = "";

createFinalGallery(galleryItems);

refs.galleryEl.addEventListener("click", openImage);

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
                <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/>
            </a>
         </li>`;
    galleryMatCap.push(imageEl);
  });
  finalGallery = galleryMatCap.join("");
}

function openImage(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  let openedImage = event.target.dataset.source;

  addModalImage(openedImage);

}

function addModalImage(openedImage) {
  const instance = basicLightbox.create(
    `<img src="${openedImage}" width="800" height="600">`
  );
    instance.show();
    
  refs.galleryEl.addEventListener("keydown", escListener);

  function escListener(event) {
    if (event.code === "Escape") {
      instance.close();
      refs.galleryEl.removeEventListener("keydown", escListener);
    }
  }
}
