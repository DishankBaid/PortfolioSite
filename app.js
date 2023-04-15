//keep the header...
window.addEventListener("scroll",()=>{
    const header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
})

//To show the modal...
const serviceModals=document.querySelectorAll('.service-modal');
const learnmorebtn=document.querySelectorAll('.learn-more-btn');
const modalclosebtn=document.querySelectorAll('.modal-close-btn');

var modal=function(modals){
    serviceModals[modals].classList.add('active');
}

learnmorebtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        modal(i);
    });
});

var closemodal=function(modals){
    serviceModals[modals].classList.remove('active');
}

modalclosebtn.forEach((btn,i)=>{
    btn.addEventListener('click',()=>{
        closemodal(i);
    });
});

//scroll to top button 
const scrollTopbtn=document.querySelector('.scrollToTop-btn');
window.addEventListener("scroll",()=>{
    scrollTopbtn.classList.toggle('active',window.scrollY>500);
})

scrollTopbtn.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

// navigation sections active link
const sections=document.querySelectorAll('section');
const navlinks=document.querySelectorAll('header a');

function setActiveLink(section){
    navlinks.forEach(navlink=>{
        if(navlink.hash === `#${section.id}`){
            navlink.classList.add('active');
        }
        else{
            navlink.classList.remove('active');
        }
    })
}
function handleScroll() {
    sections.forEach(section => {
      let fromTop = window.scrollY;
      let sectionTop = section.offsetTop - 50;
      let sectionBottom = sectionTop + section.offsetHeight;
  
      if (fromTop >= sectionTop && fromTop < sectionBottom) {
            setActiveLink(section);  
        }
    });
  }
  
window.addEventListener("scroll",handleScroll);


// Dark light theme button
const themebtn=document.querySelector('.theme-btn');
themebtn.addEventListener("click",function(){

    if(document.body.classList.value===""){
        document.body.classList.add('dark-theme');
        themebtn.classList.add('sun');
        localStorage.setItem('theme','dark');
        localStorage.setItem('icon','sun');
    }
    else{
        document.body.classList.remove('dark-theme');
        themebtn.classList.remove('sun');
        localStorage.setItem('theme','light');
        localStorage.setItem('icon','moon');
    }
});

function setThemefromLocalStorage(){
     const theme=localStorage.getItem('theme');
     const icon=localStorage.getItem('icon');

     if(theme==='dark' && icon==='sun'){
        document.body.classList.add('dark-theme');
        themebtn.classList.add('sun');
     }
     else{
        document.body.classList.remove('dark-theme');
        themebtn.classList.remove('sun');
     }
}

window.onload= setThemefromLocalStorage();

ScrollReveal({ 
    reset: true ,
    delay: 100,
    distance:'60px',
    duration:2500,
});

//scroll animations
ScrollReveal().reveal('.home .info h2,.section-title-01,.section-title-02',{delay:500,origin:'left'});
ScrollReveal().reveal('.home .info h3,.home .info p,.about-info .btn',{delay:550,origin:'right'});    
ScrollReveal().reveal('.home .info .btn',{delay:650,origin:'bottom'});
ScrollReveal().reveal('.media-icons i,.contact-left li',{delay:500,origin:'left',interval:200});
ScrollReveal().reveal('.home-img,.about-img',{delay:500,origin:'bottom'});
ScrollReveal().reveal('.about-info .description,.contact-right',{delay: 500,origin:'right'});
ScrollReveal().reveal('.about .professional-list li',{delay: 500,origin:'right',interval:200});
ScrollReveal().reveal('.skills-description,.services-description,.contact-card,.client-swiper,.contact-left h2',{delay: 700,origin:'left'});
ScrollReveal().reveal('.experience-card,.service-card,.education,contact-left h2',{delay: 800,origin:'bottom',interval:200});
ScrollReveal().reveal('footer .group',{delay: 500,origin:'top',interval:200});