// get all imgs with data - src attribute imagesToLoad
const images = document.querySelectorAll("img[data-src]");

// optional parameters being set for the Intersectional Observer
const imgOptions = {
    threshold:0, 
    rootMargin: " 0px 0px 50px 0px"
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
}
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src; // actual img source
}



const imgObserver = new IntersectionObserver((entries,
    imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })

}, imgOptions);

// all images inside of image we was it to observe the image. 
// apply observer for each image observe the image
images.forEach(image => {
imgObserver.observe(image);
});