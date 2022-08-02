let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

function showSlides(n) {
let i;
let slides = document.getElementsByClassName("mySlides");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "flex";
}

// My code to launch to future projects, for now just launch to a few websites
const myarray  = ["http://www.google.com", "http://www.amazon.com", "http://du.edu" ];
launch = () => {
    window.open(myarray[slideIndex-1])
}