document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('#gallery ul li img');
    const mainImage = document.querySelector('#gallery figure img');
    const caption = document.querySelector('#gallery figure figcaption');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const largeImageSrc = thumbnail.src.replace('small', 'large');
            mainImage.src = largeImageSrc;
            caption.textContent = thumbnail.alt;
        });
    });
});
