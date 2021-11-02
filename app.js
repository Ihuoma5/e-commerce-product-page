let menuBar = document.querySelector(".navBar");
let mobileMenu = document.querySelector(".mobileMenu");
let cart = document.querySelector(".cart");
let profileImg = document.querySelector(".profile");
let profileBg = document.querySelector(".profileBg");
let cartBox = document.querySelector(".cartBox");

loadEventListeners();

function loadEventListeners() {
  menuBar.addEventListener("click", displayMenu);
  mobileMenu.addEventListener("click", disableBar);
  profileBg.addEventListener("mouseover", showCart);
  profileBg.addEventListener("mouseout", showCart);
}

function displayMenu(e) {
    if(mobileMenu.style.display== "none"){
        mobileMenu.style.display = "block";
        menuBar.style.display = "none"
    }else {
        mobileMenu.style.display = "none"
    }
}

function disableBar(e){
    if(menuBar.style.display== "none"){
        menuBar.style.display = "block";
        mobileMenu.style.display = "none";
    }else{
        menuBar.style.display = "none"
    }
}

function showCart(e){
if(cartBox.style.display = "none"){
    cartBox.style.display = "block";
}
}
