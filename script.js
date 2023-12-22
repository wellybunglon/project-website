// Toggle class active untuk bakmimenu
const navbarNav = document.querySelector

('.navbar-nav');
//ketika menu di klik//
document.querySelector('#bakmimenu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// toggle class active untuk search form //
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};


// klik di luar element//
const bakmimenu = document.querySelector('#bakmimenu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!bakmimenu.contains(e.target) && !navbarNav.contains(e.target)) {
         navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
         searchForm.classList.remove('active');
    }
})