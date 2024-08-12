document.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const heroSectionHeight = document.querySelector('.head-banner-large').offsetHeight;
    
    // console.log(heroSectionHeight);
    // console.log(window.scrollY);

    if (window.scrollY > heroSectionHeight) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});