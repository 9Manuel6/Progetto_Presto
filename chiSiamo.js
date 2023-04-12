

let logoMagic = document.querySelector('#logoMagic');


let confirm = false;


logoMagic.addEventListener('click', ()=>{


    if(confirm == false){

        navIcon.classList.remove('fa-rotate-180');
        confirm = true;
    
    } else{

        navIcon.classList.add('fa-rotate-180');
        confirm = false;

    }


})


let mainNavbar = document.querySelector('#mainNavbar');

let containerNav = document.querySelector('#container-nav');

let logoA = document.querySelector('#logoA');
let logoB = document.querySelector('#logoB');


window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primaryC');
      
        mainNavbar.style.padding = '20px 0px';

        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

        

    } else {

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

        mainNavbar.style.padding = '10px 0px';

        logoA.classList.remove('d-none');
        logoB.classList.add('d-none');


    }
})






let opener = document.querySelector('#opener');

let movedDivs = document.querySelectorAll('#moved');

let conferma = false;


// array pianeti

let galaxy = [


    // ci va url


   { name : 'Terra', distanzaDalSole : '150 milioni di chilometri ', url : './media/terra.jpg'},
   { name : 'Luna', distanzaDalSole : ' 384400 km dalla Terra', url : './media/luna.jpg'},
   { name : 'Marte', distanzaDalSole : '228 milioni di chilometri', url : './media/marte.jpg'},
   { name : 'Saturno', distanzaDalSole : 'un miliardo e 429 milioni di Km', url : './media/Saturno.jpg'},

]


let cardWrapper = document.querySelector ('#cardWrapper');




movedDivs.forEach((moved)=>{


    moved.style.backGroundImage = `url('${galaxy[i].url}')`;


   moved.addEventListener('click', () =>{

    
    cardWrapper.innerHTML = '';

    let div = document.createElement('div');

    div.classList.add('galaxy-card');

    div.innerHTML = `
    
                    <p class="h3">${galaxy[i].name}</p>
                    <p>${galaxy[i].distanzaDalSole}</p>
    
    `;

    cardWrapper.appendChild(div);


    let card = document.querySelector('.galaxy-card');

    card.style.backGroundImage = `url(${galaxy[i].url})`;






   })








})



opener.addEvenListener('click', ()=>{

     
    if( conferma == false){

        conferma = true;

        movedDivs.forEach( (moved, i)=>{

            let angle = (360 * i)/ movedDivs.length;
    
            moved.style.transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;
    
            
             
         })


    }else{


       conferma = false;

       cardWrapper.innerHTML = '';

        movedDivs.forEach( (moved, i)=>{

           
    
            moved.style.transform = `rotate(0deg) translate(0px)`;
    
    
             
         })


    }



     




})