// logo bacchetta, evento bacchetta

let logoMagic = document.querySelector('#logoMagic');

// evento click bacchetta

// facciamo una variabile d' appoggio per checkare la condizione con true o false

let confirm = true;


logoMagic.addEventListener('click', ()=> {

    if (confirm == true){
        
        logoMagic.classList.add('fa-rotate-270');
        confirm = false
       
   
    }else{
      
        logoMagic.classList.remove('fa-rotate-270');
        confirm = true;  
    }
});



// scroll sulla navbar



 let mainNavbar = document.querySelector('#mainNavbar');




window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primo');

       
        
        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

    } else {

        mainNavbar.classList.remove('background-primo');
        mainNavbar.classList.add('bg-transparent');

       
        
        logoB.classList.add('d-none');     
        logoA.classList.remove('d-none');
    }


})


function createInterval(finalNumber, element) {

let counter = 0;


    let interval = setInterval( ()=>{

      
       if(counter < finalNumber){

        counter++
        element.innerHTML = counter;
           
       }else{

        clearInterval(interval);

       }

    }, 1)
    
}

createInterval()

let firstSpan = document.querySelector('#first-span')
let secondSpan = document.querySelector('#second-span')
let thirdSpan = document.querySelector('#third-span')


let intersectionCheck = true;

let h2Test = document.querySelector ('#h2Test');

let observed = new IntersectionObserver(

    (entries)=>{

        entries.forEach( (entry)=>{

            if(entry.isIntersecting && intersectionCheck == true){

                createInterval(1000, firstSpan);
                createInterval(1500, secondSpan);
                createInterval(500, thirdSpan);

                intersectionCheck = false;

            }

        } )

    }

)  

observed.observe(h2Test);


// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
   
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });



  let reviews = [

    {name : 'Marco', quote : 'sito non male '},
    {name : 'Emma', quote : 'sito ottimo '},
    {name : 'Delia', quote : 'si può fare di più '},
    {name : 'Manuel', quote : 'sito da migliorare '},

];


let swiperWrapper = document.querySelector('.swiper-wrapper');


reviews.forEach( (recensione)=> {

    let div = document.createElement('div');
    div.classList.add('swiper-slide' , 'd-flex' ,'justify-content-center' ,'align-items-center');

    div.innerHTML = `
    
    <div class="card-custom text-center ">
       <h3>${recensione.name}</h3>
       <p>${recensione.quote}</p>
    </div>
    
    `;

    swiperWrapper.appendChild(div);

})


let robots = document.querySelectorAll('.fa-solid fa-robot fa-2x');
let columns = document.querySelectorAll('.col-custom');

let columnsConfirm = false;

columns.forEach( (colonna, i)=>{



   
        colonna.addEventListener('mouseenter', ()=>{

        if(columnsConfirm == false){

        
            camioncini[i].classList.remove('text-secondaryC');
            camioncini[i].classList.add('text-primo');
    
        camioncini[i].classList.remove('text-blackC');

        } else {

               camioncini[i].classList.remove('text-blackC'); 
}});
                 

 

  

        colonna.addEventListener('mouseleave', ()=>{

            if(columnsConfirm == false){
    
                camioncini[i].classList.remove('text-accentC');
                camioncini[i].classList.add('text-blackC');
    
        
                camioncini[i].classList.add('text-secondo');             
                columnsConfirm = true;
              
            } else {
      
                camioncini[i].classList.add('text-secondo'); 
                columnsConfirm = false;
    
            } 
        });