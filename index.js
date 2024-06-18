

// cursor

function Cursor(event) {
  var cursor = document.querySelector('.animated-cursor');
  cursor.style.left = event.clientX + 'px';
  cursor.style.top = event.clientY + window.scrollY + 'px';
}

document.addEventListener('mousemove', Cursor);
document.addEventListener('scroll', Cursor);





// go to top button 

let mybutton = document.getElementById("go-to-top-btn");
let whatsappButton = document.querySelector(".whatsapp-button");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    whatsappButton.style.display = "block";
  } else {
    mybutton.style.display = "none";
    whatsappButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




  // animated background images 


  let bgIndex = 0;
changeBgImages();

function changeBgImages() {
  let j;
  let BgImages = document.getElementsByClassName("bgimages");

  for (let i = 0; i < BgImages.length; i++) {
    let img = new Image();
    img.src = BgImages[i].src;
  }

  
  
  for (j = 0; j < BgImages.length; j++) {
    BgImages[j].style.display = "none";
  }
  
  bgIndex++;
  if (bgIndex > BgImages.length) {
    bgIndex = 1;
  }
  if (bgIndex === BgImages.length) {
    bgIndex = 1;
  }
  
  
  BgImages[bgIndex-1].style.display = "block";
  
  
  setTimeout(changeBgImages, 10000);
}



  




// navbar

window.onscroll = function() {
  scrollFunction(),
  scrollFunction2()};

function scrollFunction2() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
}




// review page

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-1", "");
  }
  slides[slideIndex-1].style.display = "grid";  
  dots[slideIndex-1].className += " active-1";
}


// review comment section

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



// FAQs


var faq = document.getElementsByClassName("question");
var i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    for (var j = 0; j < faq.length; j++) {
      if (faq[j] !== this) {
        faq[j].classList.remove("active");
        faq[j].nextElementSibling.style.maxHeight = null;
      }
    }

    
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = (answer.scrollHeight) + "px";
    }
  });
}



















