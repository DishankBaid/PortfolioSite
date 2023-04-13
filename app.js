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

window.addEventListener("scroll",()=>{
    const sections=document.querySelectorAll("section");
    const scrollY=window.pageYOffset;
    sections.forEach(current =>{
        let sectionheight=current.offsetHeight;
        let sectiontop=current.offsetTop;
        let id=current.getAttribute('id');

        if(scrollY >sectiontop && scrollY<=sectiontop+sectionheight) {
             
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    })
})