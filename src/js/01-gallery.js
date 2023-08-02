// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';
// Change code below this line
const li = ({ preview, original, description }) => {
  return `<li class="gallery__item">
    <a class="gallery__link" href=${original}>
    <img class="gallery__image"src="${preview}"data-source=${original} alt="${description}">
    </a>
    </li>`;
};

const liElements = galleryItems.map(li).join('');

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', liElements);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
