window.addEventListener("scroll",()=>{
    const header=document.querySelector('header');
     header.classList.toggle('sticky',window.scrollY>0);
})

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

const scrollTopbtn=document.querySelector('.scrollToTop-btn');
window.addEventListener("scroll",()=>{
    scrollTopbtn.classList.toggle('active',window.scrollY>500);
})

scrollTopbtn.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
})

