import "./styles_desktop.scss";

$('.job_block_portfolio_gallery').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centralMode: true, 
    autoplay: true,
    autoplaySpeed: 1000
});

let favouriteButton = document.querySelector('.vacancy_favourite');
let vacancyButton = document.querySelector('.vacancy_button');

favouriteButton.addEventListener('click', ()=>{
    favouriteButton.classList.toggle('favouritesave');
    if (vacancyButton.innerHTML ==='Предложить вакансию') {
        vacancyButton.innerHTML = 'Приглашение отправлено &#10003';
    } else {
        vacancyButton.innerHTML = 'Предложить вакансию';
    }
    
})
