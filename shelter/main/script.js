

const burger = document.querySelector('.header-burger');
const navMenu = document.querySelector('.header-wrapper-links');
const body = document.querySelector('body');
const shadow = document.querySelector('.shadow');
const navigatorLink = document.querySelectorAll('.navigator-link')

    /**Burger-menu */

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active')
    body.classList.toggle('lock')
    shadow.classList.toggle('shadow-active')
});


navigatorLink.forEach(n =>n.addEventListener("click", () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active')
    body.classList.remove('lock')
    shadow.classList.remove('shadow-active')
}))

shadow.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active')
    body.classList.remove('lock')
    shadow.classList.remove('shadow-active')
})

navMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    navMenu.classList.remove('active')
    body.classList.remove('lock')
    shadow.classList.remove('shadow-active')
})


    /*Slider */

    const BTN_LEFT = document.querySelector("#btn-left");
    const BTN_RIGHT = document.querySelector("#btn-right");
    const CAROUSEL = document.querySelector("#carousel");
    const ITEM_LEFT = document.querySelector("#item-left");
    const ITEM_RIGHT = document.querySelector("#item-right");


    console.log(ITEM_LEFT);
  

    const createCardTemplate = () => {
      const card = document.createElement("div");
      card.classList.add("our-friends-pets_slider-card");
      document.querySelector(".our-friends-pets_slider-card").innerHTML = html;
           
      return card;
    }
    
    const moveLeft = () => {
      CAROUSEL.classList.add("transition-left");
      BTN_LEFT.removeEventListener("click", moveLeft);
      BTN_RIGHT.removeEventListener("click", moveRight);
    };
    
    const moveRight = () => {
      CAROUSEL.classList.add("transition-right");
      BTN_LEFT.removeEventListener("click", moveLeft);
      BTN_RIGHT.removeEventListener("click", moveRight);
    };
    
    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
    
    CAROUSEL.addEventListener("animationend", (animationEvent) => {
      let changedItem;
      if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        changedItem = ITEM_LEFT;
        document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
      } else {
        CAROUSEL.classList.remove("transition-right");
        changedItem = ITEM_RIGHT;
        document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
      }
      
      BTN_LEFT.addEventListener("click", moveLeft);
      BTN_RIGHT.addEventListener("click", moveRight);
    })
    
    
    