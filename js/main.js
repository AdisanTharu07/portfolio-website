// Typed js animation
var typed = new Typed('.text', {
    strings: ['Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    timeDelay: 375,
    loop: true,
});

// Scroll reveal animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true     
})

sr.reveal('.home-container',{})
sr.reveal('.grid',{delay: 100})
sr.reveal('.grid-two',{delay: 200})
sr.reveal('.btns',{delay: 200})
sr.reveal('.btns-sub',{delay: 200})
sr.reveal('.box',{delay: 200})
sr.reveal('.soci_icons',{delay: 200})
sr.reveal('.about-details',{delay: 300})
sr.reveal('.education-disc',{interval: 200})
sr.reveal('.education-details',{interval: 1500})
sr.reveal('header',{})
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-img',{delay: 100})
srLeft.reveal('.title',{delay: 100})
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

// srRight.reveal('.btns-sub',{delay: 200})
// srRight.reveal('.flex-box',{delay: 100})
