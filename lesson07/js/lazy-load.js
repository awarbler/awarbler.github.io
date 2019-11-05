// get all imgs with data - src attribute imagesToLoad
const imagesToLoad = document.querySelectorAll('img[data-src]');

// optional parameters being set for the Intersectional Observer
const imgOptions = {
    threshold: 0,
    rootMargin: " 0px 0px 50px 0px"
};
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

// first check to see if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    loadImages(item.target);
                    observer.unobserve(item.target);
                }
            });
        },
        imgOptions);
    // all images inside of image we was it to observe the image. 
    // apply observer for each image observe the image
    images.forEach((img) => {

        observer.observe(img);


    });
    else {
        images.forEach((img) =>){
            loadImages(img);
        });
        }