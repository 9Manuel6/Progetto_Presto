

let logoMagic = document.querySelector('#logoMagic');


let confirm = true;


logoMagic.addEventListener('click', ()=>{


    if(confirm == true){

        logoMagic.classList.remove('fa-rotate-180');
        confirm = false;
    
    } else{

        logoMagic.classList.add('fa-rotate-180');
        confirm = true;

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
      
       

        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

        

    } else {

        mainNavbar.classList.remove('background-primaryC');
        mainNavbar.classList.add('bg-transparent');

       

        logoA.classList.remove('d-none');
        logoB.classList.add('d-none');


    }
})




let opener = document.querySelector('.opener');

let movedDivs = document.querySelectorAll('.moved');

let conferma = false;

let galaxy = [

    { name : 'Mercurio', distanzaDalSole : '58 milioni di km', url : './media/mercurio.jpg'},
    { name : 'Venere', distanzaDalSole : ' 108.200.000 km ', url : './media/venere.jpg'},
    { name : 'Terra', distanzaDalSole : '150 milioni di chilometri ', url : './media/terra.jpg'},
    { name : 'Luna', distanzaDalSole : 'circa 150 milioni di km', url : './media/luna.jpg'},
    { name : 'Marte', distanzaDalSole : '228 milioni di chilometri', url : './media/marte.jpg'},
    { name : 'Giove', distanzaDalSole : '777 milioni di chilometri', url : './media/giove.jpg'},
    { name : 'Saturno', distanzaDalSole : 'un miliardo e 429 milioni di Km', url : './media/saturno.jpg'},  
    { name : 'Urano', distanzaDalSole : '2.800 milioni di km', url : './media/urano.jpg'},
    { name : 'Nettuno', distanzaDalSole : '4.504 milioni di Km', url : './media/nettuno.jpg'},

]

// cattura cardWrapper
let cardWrapper = document.querySelector('#cardWrapper');


movedDivs.forEach((moved, i)=>{


    moved.style.backgroundImage = `url('${galaxy[i].url}')`;

    // evento click per far apparire gli amici docenti

    moved.addEventListener('click', ()=>{


        // console.log(galaxy[i]);

        cardWrapper.innerHTML = '';

     
        let div = document.createElement('div');
        
        div.classList.add('teacher-card');

        div.innerHTML = `
                    <p class="h3">${galaxy[i].name}</p>
                    <p>${galaxy[i].distanzaDalSole}</p>
        `;

        cardWrapper.appendChild(div);


        // catturo la singola card per cambiare immagine

            let card = document.querySelector('.teacher-card');
       

                card.style.backgroundImage=`url('${galaxy[i].url}')`;

                card.setAttribute('data-aos', 'zoom-in');
                card.setAttribute('data-aos-duration','1500');


            })
            

            


 
       

    })


// evento su opener

opener.addEventListener('click', ()=>{


    if(conferma == false){


        conferma = true;

        movedDivs.forEach( (moved, i)=>{

            let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`;

           
    
    
        })

    } else {

        conferma = false;

        cardWrapper.innerHTML = '';

        movedDivs.forEach( (moved)=>{

            // let angle = (360 * i) / movedDivs.length;
    
            moved.style.transform = `rotate(0deg) translate(0px)`;

            
    
    
        })


    }

  


})

