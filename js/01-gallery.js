import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = galleryItems
  .map((image, index) => {
    return `
  <div class="gallery__item">
  <a class="gallery__link" href="${galleryItems[index].original}">
    <img
      class="gallery__image"
      src="${galleryItems[index].preview}"
      data-source="${galleryItems[index].original}"
      alt="${galleryItems[index].description}"
    />
  </a>
</div>`;
  })
  .join("");

const listEl = document.querySelector(".gallery");

listEl.insertAdjacentHTML("beforeend", galleryEl);

const boxOfGallery = document.querySelector(".gallery");
boxOfGallery.addEventListener("click", onTargetImg);
function onTargetImg(event) {
  event.preventDefault();
  const origSize = event.target.dataset.source;
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  basicLightbox
    .create(`<img width="1280" height="720" src="${origSize}">`)
    .show();
}
