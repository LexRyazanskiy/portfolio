/* Кнопка скролла наверх страницы */

/* Находим кнопку по id scrollToTopBtn */
const scrollBtn = document.querySelector('#scrollToTopBtn');


// Распечатывает в виде объекта
console.dir(scrollBtn);

// распечатывает в виде тэга
console.log(scrollBtn);

/* Слушаем событие скролла на странице */
window.addEventListener('scroll', function(){
    /* console.log('scroll'); */

    /* console.log(this.window.innerHeight);
    console.log(window.scrollY); */

    /* Если пользователь проскроллил страницу по высоте больше
    чем высота экрана */
    if (window.scrollY > this.window.innerHeight) {/* Значение насколько по оси Y проскроллили окно */
        /* Тогда к кнопке добавляем модификатор --visible для её отображения */
        scrollBtn.classList.add('top-link--visible');
    } else {
        scrollBtn.classList.remove('top-link--visible');
    }
})