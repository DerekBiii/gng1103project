const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',()=>{

        //Toggle Nav
        nav.classList.toggle('nav-active'); 

        //Animate Links
        navLinks.forEach((link,index)=>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation =`navLinkFade 0.5s ease backwards ${index / 7 + 0.3 }s`
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });
    
    

}

navSlide();

const navSlide2 = () => {
    const burger = document.querySelector('.burger2');
    const nav = document.querySelector('.nav-links2');
    const navLinks = document.querySelectorAll('.nav-links2 li');
    
    burger.addEventListener('click',()=>{

        //Toggle Nav
        nav.classList.toggle('nav-active2'); 

        //Animate Links
        navLinks.forEach((link,index)=>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation =`navLinkFade2 0.5s ease backwards ${index / 7 + 0.3 }s`
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');
    });
    
    

}

navSlide2();