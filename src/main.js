var links = document.querySelectorAll('.thumb');
var caption = document.querySelector('#caption-container .captionText');
var prevBtn = document.querySelector('#controls .prevBtn');
var nextBtn = document.querySelector('#controls .nextBtn');

var currentIndex = 0;

links.forEach(function(link) {
    link.addEventListener('click', function() {
        var slideId = this.dataset.slideId;
        var slides = document.querySelectorAll('.slide');
        var thumbs = document.querySelectorAll('.thumb');
        
        hideAllSlides(slides);
        removeAllActiveThumbs(thumbs);
        
        var slideToShow = document.getElementById(slideId);
        if (slideToShow) {
            slideToShow.style.display = "block";
            caption.innerHTML = slideToShow.alt;
            currentIndex = Array.from(slides).indexOf(slideToShow);
            this.classList.add('active');
        }
    });
});

prevBtn.addEventListener('click', function() {
    var slides = document.querySelectorAll('.slide');
    var totalSlides = slides.length;
    var prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(prevIndex);
});

nextBtn.addEventListener('click', function() {
    var slides = document.querySelectorAll('.slide');
    var totalSlides = slides.length;
    var nextIndex = (currentIndex + 1) % totalSlides;
    showSlide(nextIndex);
});

function showSlide(index) {
    var slides = document.querySelectorAll('.slide');
    var thumbs = document.querySelectorAll('.thumb');
    hideAllSlides(slides);
    removeAllActiveThumbs(thumbs);
    slides[index].style.display = "block";
    caption.innerHTML = slides[index].alt;
    currentIndex = index;
    links[currentIndex].classList.add('active');
}

function hideAllSlides(slides) {
    slides.forEach(function(slide) {
        slide.style.display = "none";
    });
}

function removeAllActiveThumbs(thumbs) {
    thumbs.forEach(function(thumb) {
        thumb.classList.remove('active');
    });
}