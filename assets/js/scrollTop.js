window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle('activeScroll', window.scrollY > 500)
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}