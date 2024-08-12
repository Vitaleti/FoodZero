// Получаем элементы кнопок и блока
const block = document.getElementById('headerDrop');
const openButton = document.getElementById('openMenuButton');
const closeButton = document.getElementById('closeMenuButton');
const blurFilter = document.getElementById('blurFilter');

// Открыть блок и показать фильтр
openButton.addEventListener('click', () => {
    block.classList.add('header-drop-show');
    blurFilter.classList.remove('visually-hidden');
    blurFilter.classList.add('show');
});

// Закрыть блок и скрыть фильтр
closeButton.addEventListener('click', () => {
    block.classList.remove('header-drop-show');
    blurFilter.classList.remove('show');
    blurFilter.classList.add('visually-hidden');
});