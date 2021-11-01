let menuBar = document.querySelector(".navBar");
let mobileMenu = document.querySelector(".mobileMenu");
let cart = document.querySelector(".cart");
let profileImg = document.querySelector(".profile");

loadEventListeners();

function loadEventListeners() {
  menuBar.addEventListener("click", displayMenu);
  mobileMenu.addEventListener("click", disableBar)
}

function displayMenu() {
    if(mobileMenu.style.display== "none"){
        mobileMenu.style.display = "block";
        menuBar.style.display = "none"
    }else {
        mobileMenu.style.display = "none"
    }
}

function disableBar(){
    if(menuBar.style.display== "none"){
        menuBar.style.display = "block";
        mobileMenu.style.display = "none";
    }else{
        menuBar.style.display = "none"
    }
}
