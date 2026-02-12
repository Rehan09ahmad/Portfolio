/*---------------------toggel icone navbar------------------*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

/*--------------------scroll  section active linke------------*/

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*-------------------- Navbar ------------*/
     
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
 
    /*----------------------remove toggel icone and navbar when click navbar link   */

};

document.querySelectorAll('.navbar a').forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-x');
        menuIcon.classList.add('fa-bars');
        navbar.classList.remove('active');
    };
});

/*--------------scrollreval---------------------*/


ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left'});

//-----------------type js---------//

const typed = new typed ('.multipale-text',{
    Strings: ['Frontend-Developer', 'Web Designer', 'Website Development'],
    typepeed: 100,
    backspeed: 100,
    backdelay: 1000,
    loop: true
})