document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.getElementById('load');
        if ( !preloader.classList.contains('success')) {
            preloader.classList.add('success');
        }
    }, 1500)
}
