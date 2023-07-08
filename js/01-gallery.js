import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

createFinalGallery(galleryItems);

refs.galleryEl.addEventListener("click", openImage);

function createFinalGallery(arrayImages) {
  const galleryInString = arrayImages
    .map((image) => {
      const imageEl = `
        <li class="gallery__item">
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/>
            </a>
         </li>`;
      return imageEl;
    })
    .join("");
  refs.galleryEl.insertAdjacentHTML("beforeend", galleryInString);
}

function openImage(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  let openedImage = event.target.dataset.source;

  addModalImage(openedImage);
}

function addModalImage(openedImage) {
  const instance = basicLightbox.create(
    `<img src="${openedImage}" width="800" height="600">`,
    {
      onShow: refs.galleryEl.addEventListener("keydown", escListener),
      onClose: () => {
        refs.galleryEl.removeEventListener("keydown", escListener);
      },
    }
  );
  instance.show();

  function escListener(event) {
    if (event.code === "Escape") {
      instance.close();
      refs.galleryEl.removeEventListener("keydown", escListener);
    }
  }
}
