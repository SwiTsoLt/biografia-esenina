Fancybox.bind('[data-fancybox="gallery"]', {
    caption: (fancybox, slide) => {
        const caption = slide.caption || "";

        return `${slide.index + 1} / ${fancybox.carousel?.slides.length
            } <br /> ${caption}`;
    },
});