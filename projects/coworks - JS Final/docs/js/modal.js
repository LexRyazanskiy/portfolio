/* Модальные окна */

/* Находим элементы для модального окна */

/* Все кнопки открывающие модальные окна по data атрибуту
[data-action="modal"] */
const openModalBtns = document.querySelectorAll('[data-action="modal"]');

const modal = document.querySelector('.modal');//нашли модальное окно
const closeModalBtn = document.querySelector('#closeModal');// Кнопка закрытия модального окна
const modalBody = document.querySelector('.modal__body');//Блок с контентом модального окна

// Перебираем все кнопки
openModalBtns.forEach(function(item){

    // вешаем прослушку на данные кнопки по клику
    item.addEventListener('click', function(){
        // Обращаемся к модалке и отображаем ее, добавляя к ней класс modal--open
        modal.classList.add('modal--open');

        // Добавляем к body класс no-scroll чтобы запретить скролл на странице
        document.body.classList.add('no-scroll');
    })
})

//Слушаем клик по кнопке закрытия модального окна
closeModalBtn.addEventListener('click', function(){
    // Закрываем модальное окно, удаляя у него класс modal--open
    modal.classList.remove('modal--open');

    // Удаляем у body класс no-scroll чтобы включить скролл на странице
    document.body.classList.remove('no-scroll');
})

// Закрытие модалки при клике по оверлею
modal.addEventListener('click', function(){
    // Закрываем модальное окно, удаляя у него класс modal--open
    modal.classList.remove('modal--open');

    // Удаляем у body класс no-scroll чтобы включить скролл на странице
    document.body.classList.remove('no-scroll');
})

// Слушаем клик непосредственно внутри модального окна
modalBody.addEventListener('click', function(event){

    /* Запрещяем кликам из содержимого модального кона "всплывать наверх"
        Чтобы они не доходили до элемента modal и не закрывали модальное окно
    */

    event.stopPropagation();/* Все клики, которые будут делаться на 
    modalBody, либо внутри, запустят функцию и запретят поднимать
    клик выше уровнем (не дойдут до modal) */
})

// Закрываем модалку нажатием Escape
document.addEventListener('keydown', function(event){//event включает себя все события по действиям на сайте
    if(event.key == 'Escape') {
    modal.classList.remove('modal--open');
    document.body.classList.remove('no-scroll');
    }
})