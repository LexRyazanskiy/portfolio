/* Аккордеон. Для блока ответы на вопросы */

// Находим все блоки для аккордеона
const topics = document.querySelectorAll('.topic');

// Обходим все блоки аккордеона
topics.forEach(function(topic){
    // На каждый блок вешаем прослушку по клику
    topic.addEventListener('click', function(event){

        /* Проверяем, был клик внутри кнопки или нет
           Проверка идет на то, что клик был совершен на элементе, который размещен внутри кнопки,
           т.е. внутри блока с классом .topic__btn, в нашем случае это кнопка */

        /* Выполняется проверка на ближайшего родителя с классом
        topic__btn */
        if (event.target.closest('.topic__btn')){
            /* Переключаем у блока класс topic--open
            Если был добавлен - вернется true, если был убран вернется false
            Возвращаемое значение записываем в константу isOpened */
            const isOpened = topic.classList.toggle('topic--open');

            // Находим картинку
            const img = topic.querySelector('.topic__icon');

            //Нашли блок topic__content
            const content = topic.querySelector('.topic__content');


            /* Проверяем, если мы добавили класс, т.е. блок надо открыть
            Тогда открываем его и отображаем на странице */
            if (isOpened) {
                img.src= './img/icons/btn-minus.svg';
                content.style.maxHeight = content.scrollHeight + 'px';//вернет высоту контента
            }else {
                img.src= './img/icons/btn-plus.svg';
                content.style.maxHeight = '0px';
            }
        }
    })
})