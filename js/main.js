const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/mobile/nav-close.svg";
    } else {
        navBtnImg.src = "./img/mobile/nav.svg"; 
    }

}