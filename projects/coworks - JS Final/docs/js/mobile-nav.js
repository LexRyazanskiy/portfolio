/* Мобильная навигация */

// Находим кнопку открытия мобильной навигации по id
const mobileNavBtnOpen = document.querySelector('#openMobileNav');

// Находим кнопку закрытия мобильной навигации по id
const mobileNavBtnClose = document.querySelector('#closeMobileNav');

// Находим блок с мобильной навигацией
const mobileNav = document.querySelector('.mobile-nav');

/* Вешаем прослушку по клику на кнопку открытия мобильной навигации */
mobileNavBtnOpen.addEventListener('click', function(){
   console.log('Click');

   /* По клику добавляем класс mobile-nav--open к блоку с моб. навигацией */
   mobileNav.classList.add('mobile-nav--open');

   // Добавляем класс no-scroll к тегу body для выключения скролла по странице
   document.body.classList.add('no-scroll');
})

/* Вешаем прослушку по клику на кнопку закрытия мобильной навигации */
mobileNavBtnClose.addEventListener('click', function(){
    /* По клику удаляем класс mobile-nav--open у блока с моб. навигацией */
    mobileNav.classList.remove('mobile-nav--open');

    // Удаляем класс no-scroll у тега body для включения скролла по странице
   document.body.classList.remove('no-scroll');
})

/* Закрыть мобильную навигацию по клику по ссылкам внутри
мобильной навигации */

const mobileNavLinks = mobileNav.querySelectorAll('a, button');

mobileNavLinks.forEach(function(item){
    /* Вешаем прослушку по клику на каждую ссылку в моб. навигации */
    item.addEventListener('click', function(){
        console.log('Click on element');
        
    /* По клику удаляем класс mobile-nav--open у блока с моб. навигацией */
    mobileNav.classList.remove('mobile-nav--open');

    // Удаляем класс no-scroll у тега body для включения скролла по странице
    document.body.classList.remove('no-scroll');
    })
})