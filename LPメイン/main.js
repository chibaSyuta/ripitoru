'use strict';

{



    let imageContainer = document.querySelectorAll('.imageContainer');
    let flex2 = document.querySelectorAll('.flex2');
    // imageContainer.style.height = `${flex2.offsetHeight}px`;

    flex2.forEach( (flex2) => {        
        flex2.children[0].style.height = `${flex2.offsetHeight}px`;
        flex2.children[0].style.width = `${flex2.offsetHeight}px`;
    });

        
    window.addEventListener('resize', () => {
        if ( window.innerWidth >= 700 ) {
            console.log( 112 );
            flex2.forEach( (flex2) => {        
                flex2.children[0].style.height = `${flex2.offsetHeight}px`;
                flex2.children[0].style.width = `${flex2.offsetHeight}px`;
            });
        }
    });



}