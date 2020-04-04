const navSlide = () =>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header_nav");
  //Khi click burger thi .header_nav se chuyen sang lay (toggle) class mav-active
  burger.addEventListener("click",() =>{
    nav.classList.toggle("nav-active");
  })
}
navSlide();