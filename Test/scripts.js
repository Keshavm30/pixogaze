document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery .item img');

    galleryItems.forEach(item => {
        item.addEventListener('load', () => {
            const aspectRatio = item.naturalWidth / item.naturalHeight;
            if (aspectRatio > 1) {
                item.style.width = '100%';
                item.style.height = 'auto';
            } else {
                item.style.width = 'auto';
                item.style.height = '100%';
            }
        });
    });
});
