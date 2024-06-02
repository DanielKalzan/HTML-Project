let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function shwoToast(){
var toast = document.querySelector(".toast");
var btn = document.querySelector(".toast-btn");
var close = document.querySelector(".toast-close");
var progress = document.querySelector(".progress");

btn.addEventListener("click", () =>{
  toast.classList.add("active");
  progress.classList.add("active");

  setTimeout(() =>{
    toast.classList.remove("active");
  }, 5000)

  setTimeout(() =>{
    progress.classList.remove("active");
  }, 5300)
})

close.addEventListener("click", () =>{
  toast.classList.remove("active");

  setTimeout(() =>{
    progress.classList.remove("active");
  }, 300)
})
}