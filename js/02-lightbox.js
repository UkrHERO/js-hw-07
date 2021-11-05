import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = galleryItems
  .map((image, index) => {
    return `
  <a class="gallery__item" href="${galleryItems[index].original}">
    <img
      class="gallery__image"
      src="${galleryItems[index].preview}"
      alt="${galleryItems[index].description}"
    />
  </a>`;
  })
  .join("");

const listEl = document.querySelector(".gallery");

listEl.insertAdjacentHTML("beforeend", galleryEl);

(function () {
  var $gallery = new SimpleLightbox(".gallery a", {
    captionDelay: "250ms",
    captionsData: "alt",
  });
})();
