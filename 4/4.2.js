var scroll = window.setInterval(function () {

    window.scrollBy(0, 50);
    var scrollHeight = document.body.scrollHeight - window.innerHeight;
    if (window.scrollY >= scrollHeight) {
        clearInterval(scroll);
        console.log('finish');
    }
}, 100)


