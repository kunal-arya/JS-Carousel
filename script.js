const slides = document.querySelectorAll(".carousel-item ");
const indicators = document.querySelectorAll(".carousel-slides");
const nextBtn = document.querySelector(".carousel-button-next");
const prevBtn = document.querySelector(".carousel-button-prev");
let currentSlide = 0;
const totalSlides = slides.length;

function slidesChange (slide1,slide2) {
    // slide Change
    slides[slide1].classList.remove("carousel-item-visible");
    slides[slide2].classList.add("carousel-item-visible");

    // Indicator change
    for(let indicator of indicators){
        indicator.classList.remove("carousel-indicator-active");
    }
    indicators[slide2].classList.add("carousel-indicator-active");
}

function indicatorClicked () {
    for(let i = 0 ; i < indicators.length ; i++){
        indicators[i].addEventListener("click", () => {
            slidesChange(currentSlide,i);
            currentSlide = i;
        })
    }
}

function nextSlide () {
    let prevSlide = currentSlide;
    if(currentSlide === totalSlides - 1){
        currentSlide = 0;
    } else {
        currentSlide++; 
    }
    slidesChange (prevSlide,currentSlide);
}

function prevSlide () {
    let prevSlide = currentSlide;
    if(currentSlide === 0){
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    slidesChange(prevSlide,currentSlide);
}

// next carousel 

nextBtn.addEventListener("click", nextSlide);


// previous carousel 

prevBtn.addEventListener("click", prevSlide);


// function Calls 

indicatorClicked ();

// changing slides in every  Seconds

setInterval(nextSlide , 5000);


