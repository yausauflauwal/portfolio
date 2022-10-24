document.querySelector('#menu').addEventListener('click', function(){
    
    document.querySelector('#menu').style.display = "none";
    document.querySelector('.times').style.display = "block";
    document.querySelector('header').style.display = "block";
    
});

document.querySelector('.times').addEventListener('click', function(){

    document.querySelector('#menu').style.display = "block";
    document.querySelector('.times').style.display = "none";
    document.querySelector('header').style.display = "none";

})

$(window).on('scroll load', function(){

    document.querySelector('#menu').style.display = "none";
    document.querySelector('.times').style.display = "none";
    document.querySelector('header').style.display = "none";


})