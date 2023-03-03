function afterloading(){
    load();
    loader();
    scroll();
}





function load(){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
        })
    });
    const animate = document.querySelectorAll('.animate');
    animate.forEach((el) => observer.observe(el));

    const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add('show1');
            }
        })
    });
    
    const animate1 = document.querySelectorAll('.animate1');
    animate1.forEach((el) => obs.observe(el));
}


function loader(){

    setTimeout(()=>{
        spinner = document.querySelector(".spinner");
        body = document.querySelector('body');

        spinner.classList.add('spinner--hidden');
        body.classList.add('loaded');
    },500);
}

function scroll(){
    var position = window.scrollY;
    header = document.querySelector('header');
    window.addEventListener('scroll', ()=>{
        position = window.scrollY;
       if(position > 10){
        header.classList.add('active');
       }
       else{
        header.classList.remove('active');
       }
    })
}