/* https://www.w3schools.com/howto/howto_js_slideshow.asp */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
let plusSlides = (n)=> {
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
const myarray  = ["https://myang5t3r.github.io/PasswordGenerator/", 
"https://myang5t3r.github.io/TimedCodeQuiz/", "http://du.edu" ];
 
const gitrepo = ["https://github.com/myang5t3r/Professional_Portfolio",
    "https://github.com/myang5t3r/TimedCodeQuiz", "http://du.edu"]

let launchSite = () => {
    window.open(myarray[slideIndex-1])
}
let launchRepo = () => {
    window.open(gitrepo[slideIndex-1])
}