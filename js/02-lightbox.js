import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

// createFinalGallery(galleryItems);

createFinalGalleryByReduce(galleryItems);

// function createFinalGallery(arrayImages) {
//   const finalGallery = arrayImages
//     .map((image) => {
//       const imageEl = `
//         <li class="gallery__item">
//             <a class="gallery__link" href="${image.original}">
//                 <img class="gallery__image" src="${image.preview}" alt="${image.description}"/>
//             </a>
//          </li>`;
//       return imageEl;
//     })
//     .join("");
//   refs.galleryEl.insertAdjacentHTML("beforeend", finalGallery);
// }

function createFinalGalleryByReduce(arrayImages) {
  const finalGallery = arrayImages.reduce(
    (accumulator, item) =>
      accumulator +=
      `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
          </a>
        </li>`,
    ""
  );

  refs.galleryEl.insertAdjacentHTML("beforeend", finalGallery);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
