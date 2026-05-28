const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

  reveals.forEach((reveal)=>{

    let windowHeight = window.innerHeight;
    let revealTop = reveal.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){
      reveal.classList.add('active');
    }

  });

});

const form = document.querySelector('.contact-form');

if(form){

  form.addEventListener('submit',(e)=>{

    e.preventDefault();

    alert('Thank You! Your message has been submitted.');

  });

}