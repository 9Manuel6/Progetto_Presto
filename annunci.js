
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





fetch('./annunci.json').then( (response)=> response.json() ).then( (data)=> {

  
    
    let categoryWrapper = document.querySelector('#categoryWrapper');   
    let cardsWrapper = document.querySelector('#cardsWrapper');
    
    
  
    
    function setCategoryFilters(){
    
    let categories = data.map( (annuncio)=> annuncio.category );
    
  
    
    let uniqueCategories = [];
    
    categories.forEach( (category)=>{
    
        if( !uniqueCategories.includes(category)){
    
            uniqueCategories.push(category)
    
            }
    
    
        } )
    
    
        uniqueCategories.forEach( (category)=>{
    
    
            let div = document.createElement('div');
    
            div.classList.add('form-check');
    
            div.innerHTML = `
            
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                    <label class="form-check-label" for="${category}">
                    ${category}
                    </label>    
                    
            `;
    
    
            categoryWrapper.appendChild(div);
    
    
    
            } )      
     
        }
        setCategoryFilters();

        function showCards(array){
           
            cardsWrapper.innerHTML = '';
         
            array.sort((a, b) => Number(b.price - a.price));
        
        
            array.forEach( (element , i)=>{
        
        
                let div = document.createElement('div');
        
                div.classList.add('col-12' , 'col-md-3' , 'my-5');
        
                div.innerHTML = `
                
                                <div class="announcement-card text-center">
                                    
                                    <img class = "img-card-custom" src="https://picsum.photos/${200 + i}" alt="">
                                   
                                    <p class="h3">${element.name}</p>
                                    <h3>${element.category}</h3>
                                    <h3>${element.price} €</h3>
                                </div>
                
                `;
        
        
                cardsWrapper.appendChild(div);
        
        
        
            } )
        
            }
        
            showCards(data);
        
        
            // funzione filtra per categoria, mostra cards (al click sul radio button)
        
            function filterbyCategory(array){
        
            //  let categoria = Array.from(checkInputs).find((button)=> button.checked).id;

             let arrayFromNodeList = Array.from(checkInputs);

             let button = arrayFromNodeList.find((bottone)=> bottone.checked);

             let categoria = button.id;

             





        
                if(categoria != 'All'){
        
                    let filtered = array.filter( (annuncio)=> annuncio.category == categoria );
        
                    return(filtered);
        
                } else {
        
                    return(data);
        
                }
        
                
        
            }
        
                // cattura radio buttons
        
            let checkInputs = document.querySelectorAll('.form-check-input')
        
            checkInputs.forEach( (checkInput)=>{
        
        
                checkInput.addEventListener('click', ()=>{
        
                   globalFilter();
        
                })
        
        
            })
        
        
           
        
            let inputPrice = document.querySelector('#inputPrice');
        
            let incrementNumber = document.querySelector('#incrementNumber');        
            function setInputPrice(){
        
                let prices = data.map( (annuncio)=> Number(annuncio.price) );
        
                let maxPrice = Math.max(...prices);
        
                inputPrice.max = Math.ceil(maxPrice);
        
                inputPrice.value = Math.ceil(maxPrice);
        
                incrementNumber.innerHTML = Math.ceil(maxPrice);
        
        
            }
        
            setInputPrice();
        
            function filterbyPrice(array){
        
                let filtered = array.filter( (annuncio)=> Number(annuncio.price <= Math.ceil(inputPrice.value)) );        
        

               return(filtered);
        
            }
        
          
        
            inputPrice.addEventListener('input', ()=>{
                
                
                incrementNumber.innerHTML = inputPrice.value;
               
                globalFilter();
        
        
        
            } )
        
           
        
            let wordInput = document.querySelector('#wordInput');        
            function filterbyWord(array){
        
                let nome = wordInput.value;
                              
                let filtered = array.filter ( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()) );
        
               return(filtered);
            
            }
        
           
            wordInput.addEventListener('input', ()=>{
        
              globalFilter();
        
            })


            // filtro supremo

            function globalFilter(){

                let filteredByCategory = filterbyCategory(data);

                let filteredByPride = filterbyPrice(filteredByCategory);

                let filteredByWord = filterbyWord(filteredByPride);


                showCards(filteredByWord);



            }


    });
   

 


  






        
    