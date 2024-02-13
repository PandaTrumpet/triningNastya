


import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";






// const gallery = document.querySelector('.guliver-menu');

// const link = document.querySelector('.img-guliver');




// function createMarkup({ original, preview, description }) {
//   const markup = ` <li class="img-guliver">
//     <a class="big"  href="${original}">
//       <img
//         class="gallery-image"
//         src="${preview}"
//         alt="${description}"
//       />
//     </a>
//   </li>`;
//   return markup;
// }

// let paste = '';

// for (let image of images) {
//   paste += createMarkup(image);
// }
// gallery.innerHTML = paste;

const lightbox = new SimpleLightbox('.guliver-menu a', {
    captionsData: "alt",
    captionDelay:250,
});



const lightbox2 = new SimpleLightbox('.gurden-menu a', {
    captionsData: "alt",
    captionDelay:250,
});



