gsap.from("#kDramas", {y:-100, opacity: 0, duration: 3, delay: 1})



const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".drama");
const bear = document.querySelector(".notFind");
const container = document.querySelector(".container");

 
searchInput.addEventListener("input", function(e) {
  const wordOfUser = e.target.value.toLowerCase().trim();
  let i = false;
  divs.forEach(item => {
      if (item.querySelector(".dramaName").textContent.toLowerCase().includes(wordOfUser))
      {
      item.style.display = "flex";
    //   bear.classList.remove("shownotFind");
      i = true;
      return true;
      }

 
        else
      {
      item.style.display = "none";
      bear.style.display = "flex";//показывает мишку
      return false;
      }
  })

 
    if (i === true)
//   bear.classList.remove("shownotFind");
    bear.style.display = "none"; // прячет мишку
  else
//   bear.classList.add("shownotFind");
    bear.style.display = "flex"; //показывает мишку
})





   

//кнопка скрыть/показать оставлена до лучших времен
// buttonClicked.addEventListener('click', () => {
//     container.classList.toggle('hidden');
// })

//Слайды JS
/*
const back = document.querySelector('#back'); 
const next = document.querySelector('#next'); 
const textSlide = document.querySelector('#slide-text');

const photos = ['pictures/100daysSlide.jpg','pictures/1988Slide.jpg','pictures/kiSlide.png' ]; 


let i = 0; 

next.addEventListener ('click', () => { 
    i++; 
    if (i > photos.length-1 ){ 
        i=0; 
} 
document.querySelector('#pictures').src = photos[i]; 

}) 

 
back.addEventListener ('click', ()=> { 
    i--; 
    if (i < 0) { 
    i = photos.length-1; 
} 
document.querySelector('#pictures').src = photos[i]; 

})    
*/

























