import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector('.gallery');

const  createGallery = (galleryItems) => {
return galleryItems.map(el => {
  // const { original, preview, description } = element;
    return `<div class="gallery__item">
    <a class="gallery__link"
     href="${el.original}">
      <img
        class="gallery__image"
        src="${el.preview}"
        data-source="${el.original}"
        alt="${el.description}"
      />
    </a>
  </div>`
}).join('');}

galleryContainer.insertAdjacentHTML('beforeend', createGallery(galleryItems));

const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: '300ms',
 });
