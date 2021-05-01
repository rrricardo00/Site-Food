window.addEventListener('scroll', () => {
    document.documentElement.scrollTop > 100 ? document.querySelector('.menu').style.background = "#000" : document.querySelector('.menu').style.backgroundColor = "rgba(0,0,0,.5)";
})

function mostrarScroll() {
    
    function show(e) {
        
        window.addEventListener('scroll', () =>{
            
            const telaTop = window.scrollY;
            const elementoTop = e.getBoundingClientRect().top;
            
            telaTop < elementoTop ? e.style.opacity = "0" : e.style.opacity = "1";

        });
    }

    function pegarItem(){
        document.querySelectorAll('section').forEach(item => show(item))
    }

    pegarItem();

}



mostrarScroll();