'use strict';

const h1 = document.querySelector('h1');

const btn = document.querySelector('a');

let counter = 0;

btn.addEventListener('click', () => {

    counter++;

    console.log(counter);

    if(counter % 2 === 0) {

        h1.innerText = 'Tuning samochodów Warszawa - Nazwa';
        
    } else {
        
        h1.innerText = 'To jest tekst podmieniony ;)';
    
    }

    

});