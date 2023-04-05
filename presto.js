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
 let logoA = document.querySelector('#logoA')
 let logoB = document.querySelector('#logoB')



window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-primo');

        mainNavbar.style.height = '100px';
        
        logoB.classList.remove('d-none');
        logoA.classList.add('d-none');

    } else {

        mainNavbar.classList.remove('background-primo');
        mainNavbar.classList.add('bg-transparent');

        mainNavbar.style.height = '60px';
        
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