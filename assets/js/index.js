const pageOne = document.querySelector('#page1');
const pageTwo = document.querySelector('#page2');
const pageThree = document.querySelector('#page3');
const pageFour = document.querySelector('#page4');
const btnScrollDownOne = document.querySelector('#scrollDown-1');
const btnScrollDownTow = document.querySelector('#scrollDown-2');
const btnScrollDownThree = document.querySelector('#scrollDown-3');
const btnScrollUpperOne = document.querySelector('#scrollUp-1');
const btnScrollUpperTwo = document.querySelector('#scrollUp-2');
const btnScrollUpperThree = document.querySelector('#scrollUp-3');
const eventSessionText = document.querySelector('.event-session');
const eventSessionTwo = document.querySelector('.event-session-2');
const headingLarge = document.querySelector('.wlc-content h1');
const headingMidum = document.querySelector('div.display-4');
const roundBox1 = document.querySelector('#roundBox1');
const roundBox = document.querySelector('#roundBox2');
const roundBox3 = document.querySelector('#roundBox3');
const roundBox4 = document.querySelector('#roundBox4');
const letImg1 = document.querySelector('#letImg1');
const rightImg1 = document.querySelector('#rightImg1');
const letImg2 = document.querySelector('#letImg2');
const rightImg2 = document.querySelector('#rightImg2');
const sectionTextPra = document.querySelectorAll('.section-content p');
const signUpOne = document.querySelector('#signUpOne');
const signUpTwo = document.querySelector('#signUpTow');

btnScrollDownOne.addEventListener('click', (e) => {
    e.preventDefault();

    gsap.fromTo(
        eventSessionText, 
        { y: 0},
        {opacity: 0, y: 500, duration: 1},
    );
    gsap.fromTo(
        headingLarge, 
        { y: 0},
        {opacity: 0, y: -100, duration: 1},
    );
    
    gsap.to(pageOne, { duration: 0.5, opacity: 0, display: 'none' });
    
    gsap.fromTo(pageTwo, { opacity: 0, display: 'none' }, { duration: 0.5, opacity: 1, display: 'flex' });
    gsap.fromTo(
        roundBox, 
        {height: 0, opacity: 0,},
        {duration: 1, height: 670, opacity: 1, }, 
    );
    gsap.fromTo(
        headingMidum, 
        { y: 100},
        {opacity: 1, y: 0, duration: 1},
    );
    gsap.fromTo(
        eventSessionTwo, 
        { y: -300, opacity:0},
        {opacity: 1, y: 0, duration: 1},
    );
    gsap.fromTo(
        signUpTwo, 
        { y: 300, opacity:0},
        {opacity: 1, y: 0, duration: 1},
    );
    gsap.to(
        letImg1, 
        {opacity: 1, duration: 1, delay:0.5},
    );
    gsap.to(
        rightImg1, 
        {opacity: 1, duration: 1, delay:0.5},
    );
    console.log("Kaj kore")
    /* sections.forEach( (section) => {
        
        if( triggerBottom === 900 ){
            section.classList.add('show');
        }else{
            section.classList.remove('show');
        }
    }) */
})

btnScrollDownTow.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(pageTwo, { duration: 0.5, opacity: 0, display: 'none' });
    
    gsap.fromTo(pageThree, { opacity: 0, display: 'none' }, { duration: 0.5, opacity: 1, display: 'flex' });

    gsap.fromTo(
        letImg2, 
        { x: 540,opacity: 0},
        {opacity: 1, x: 0, duration: 1},
    );
    gsap.fromTo(sectionTextPra, { opacity: 0 },{ opacity: 1, duration: 1, y: 10, stagger:0.5 })
    gsap.fromTo(
        rightImg2, 
        { opacity: 0, x: -96},
        {x: 0, opacity: 1, duration: 1}
    );
    gsap.fromTo(
        roundBox3, 
        {height: 670, opacity: 0,opacity: 0, borderRadius: '0 0 395.083px 395.083px'},
        {duration: 1.5, height: '100%', opacity: 1, borderRadius: '0 0 0 0'}, 
    );

});

btnScrollDownThree.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(pageThree, { duration: 0.5, opacity: 0, display: 'none' });
    
    gsap.fromTo(pageFour, { opacity: 0, display: 'none' }, { duration: 0.5, opacity: 1, display: 'flex' });
    
    gsap.fromTo(
        roundBox4, 
        {height: 1800, opacity: 0,},
        {duration: 1.5, height: 360, opacity: 1 }, 
    );
});


btnScrollUpperOne.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(pageTwo, { duration: 0.5, opacity: 0, display: 'none' });
    gsap.fromTo(pageOne, { opacity: 0, display: 'none' }, { duration: 0.5, opacity: 1, display: 'flex' });
    gsap.fromTo(
        eventSessionText, 
        { y: 500},
        {opacity: 1, y: 0, duration: 1},
    );
    gsap.fromTo(
        headingLarge, 
        { y: -100},
        {opacity: 1, y: 0, duration: 1},
    );
    gsap.fromTo(
        roundBox1, 
        {height: 800, opacity: 0,},
        {duration: 1, height: 390, opacity: 1, }, 
    );
    gsap.fromTo(
        signUpOne, 
        { y: -300, opacity:0},
        {opacity: 1, y: 0, duration: 1},
    );
});

btnScrollUpperTwo.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(pageThree, { duration: 0.5, opacity: 0, display: 'none' });
    gsap.fromTo(pageTwo, { opacity: 0, display: 'none' }, { duration: 0.5, opacity: 1, display: 'flex' });
    gsap.fromTo(
        roundBox, 
        {height: 1800, opacity: 0,},
        {duration: 1, height: 670, opacity: 1, }, 
    );
});

btnScrollUpperThree.addEventListener('click', (e) => {
    e.preventDefault();
    gsap.to(pageFour, { duration: 0.5, opacity: 0, display: 'none' });
    gsap.fromTo(pageThree, { opacity: 0, display: 'none' }, { duration: 0.5, opacity: 1, display: 'flex' });
    gsap.fromTo(
        roundBox3, 
        {height: 300, opacity: 0, borderRadius: '0 0 395.083px 395.083px'},
        {duration: 1, height: '100%', borderRadius: '0 0 0 0', opacity: 1, }, 
    );
    gsap.fromTo(
        letImg2, 
        {opacity: 360, x: -180},
        { x: 0,opacity: 1, duration: 1},
    );
    gsap.fromTo(
        rightImg2, 
        {x: -192, opacity: 0},
        { opacity: 1, x: 0, duration: 1},
    );
});