let page = document.querySelector('.page');
let themeButton = document.querySelector('#switch');

themeButton.onclick = function (){
    page.classList.toggle('themeLight');
    page.classList.toggle('themeDark');
}