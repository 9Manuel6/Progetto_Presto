
let navIcon = document.querySelector('#navIcon');


let confirm = false;


navIcon.addEventListener('click', ()=>{


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
            
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="All" checked>
                    <label class="form-check-label" for="All">
                    tutte le Categorie
                    </label>    
                    
            `;
    
    
            categoryWrapper.appendChild(div);
    
    
    
            } )      
     
        }
        setCategoryFilters();

        function showCards(array){

            // svuotamento wrapper
            cardsWrapper.innerHTML = '';
        
            // metto le card in ordine decrescente
            
            array.sort((a, b) => Number(b.price - a.price));
        
        
            array.forEach( (element)=>{
        
        
                let div = document.createElement('div');
        
                div.classList.add('col-12' , 'col-md-3' , 'my-5');
        
                div.innerHTML = `
                
                                <div class="announcement-card text-center">
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
        
            function filterbyCategory(categoria){
        
        
                if(categoria != 'All'){
        
                    let filtered = data.filter( (annuncio)=> annuncio.category == categoria );
        
                    showCards(filtered);
        
                } else {
        
                    showCards(data);
        
                }
        
                
        
            }
        
                // cattura radio buttons
        
            let checkInputs = document.querySelectorAll('.form-check-input')
        
            checkInputs.forEach( (checkInput)=>{
        
        
                checkInput.addEventListener('click', ()=>{
        
                    filterbyCategory(checkInput.id);
        
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
        
            function filterbyPrice(prezzo){
        
                let filtered = data.filter( (annuncio)=> Number(annuncio.price <= prezzo) );        
        
                showCards(filtered);
        
            }
        
          
        
            inputPrice.addEventListener('input', ()=>{
        
                filterbyPrice(inputPrice.value);
        
                incrementNumber.innerHTML = inputPrice.value;
        
        
            } )
        
           
        
            let wordInput = document.querySelector('#wordInput');        
            function filterbyWord(nome){
        
                let filtered = data.filter ( (annuncio)=> annuncio.name.toLowerCase().includes(nome.toLowerCase()) );
        
                showCards(filtered);
        
            }
        
           
            wordInput.addEventListener('input', ()=>{
        
                filterbyWord(wordInput.value);
        
            })


    })
   