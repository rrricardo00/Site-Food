window.addEventListener('scroll', () =>{
    document.documentElement.scrollTop > 100 ? document.querySelector('.menu').style.background = "#000" : document.querySelector('.menu').style.backgroundColor = "rgba(0,0,0,.5)";
})