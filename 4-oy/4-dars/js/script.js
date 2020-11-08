

// document.querySelector('.class1').style.backgroundColor = 'red';
// $('.class1').css('backgroundColor','yellow');
// $('#id')
// $('a#tra').css('color','red');
// $('a.active').css('color','green');
// $('div,p').css('border','1px solid yellow');
// $('*').css('cursor','pointer');
// $('div:hover').css('color','pink');
// $('div  a').css('display','none');
// $('h1  h2 span  a').css('display','none');


// $('a[download]').css('border', '1px solid red'); // Простой атрибут
// $('a[href="http://ya.ru"]').css('border', '1px solid red'); // Полное соответсвие
// $('a[href!="http://ya.ru"]').css('border', '1px solid red'); // Полное несоответствие
// $('a[href^="http"]').css('border', '1px solid green'); // Начинается с ...
// $('a[href$=".com"]').css('border', '1px solid red'); // Заканчивается на ... 
// $('a[href*="google"]').css('border', '1px solid red'); // Содержит ... 
// $('a[data-target|="main"]').css('border', '1px solid red'); // Имеет префикс - ... 
// $('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов 



/* Простые фильтры в jQuery */		

// $('p:first').css('border', '1px solid red'); // Первый элемент
// $('p:last').css('border', '1px solid red');// Последний элемент
// $('a:eq(2)').css('border', '1px solid red');// Элемент под номером ... (нумерация с 0)
// $('*:not(h2,p)').css('border', '1px solid red');// Исключает из найденных элементов selector
// // $('li:odd').css('background', 'red');// Четные найденные элементы
// // $('li:even').css('background', 'green'); // Нечетные найденные элементы
// $('li:gt(0)').css('background','green');// Элементы чей порядковый номер больше n
// $('li:lt(3)').css('background', 'gray');// Элементы чей порядковый номер меньше n
// $('*:header').css('border', '1px solid red');// Только те элементы, которые являются заголовками
// $('li:animated').css('border', '1px solid red'); // Только те элементы, которые задействованы в анимации
// $('li:hidden').css('border', '1px solid red'); // Скрытые элементы
// $('.red:hidden').css('display','block');
// $('li:visible').css('border', '1px solid red');// Видимые элементы
// $('div + span:lang(ru)').css('display', 'none'); // Фильтрация по языку



/* Фильтры по содержимому в jQuery */		

// $('li:contains(файл)').css('border', 'solid 1px red'); // содержит текст
// $('p:empty').html('<b>Любой текст</b>')  // пустой
// $('h2:has(span)').css('border', '1px solid #000'); // имеет внутри селектор
// $('span:parent').css('border', '1px solid #000'); // обращение к родителю


// $('input').css('border', '1px solid red'); // Все поля input 
// $('input:button').css('border', '1px solid red'); // Поле button - простая кнопка
// $('input:radio').css('display', 'block'); // Радио-кнопки 
// $('input:checkbox').css('display', 'block'); // Чекбоксы
// $('input:text').css('border', '1px solid red');// Текстовые поля для ввода
// $('input:password').css('border', '1px solid red'); // Поле для ввода пароля
// $('input:file').css('border', '1px solid red'); // Поле для загрузки файла
// $('input:submit').css('border', '1px solid red'); // Кнопка "Отправить"
// $('input:reset').css('border', '1px solid red'); // Кнопка "Сбросить"
// $('input:image').css('border', '1px solid red'); // Кнопка-картинка 
// $('input:focus').css('display', 'block'); // Выбранное поле (состояние фокус)
// $('input:checked').css('border', '1px solid red'); // Выбранный чекбокс или радио-кнопка
// $('input:enabled').css('border', '1px solid red'); // Доступное поле
// $('input:disabled').css('border', '1px solid red'); // Недоступное поле


/* ====== События, связанные с мышью ===== */



// $('button').click(function() {
//     console.log('Ты кликнул на кнопку');
//     $(this).toggleClass('blue');
// }); // Клик мышью

// $('button').dblclick(function() {
// 	console.log('Ты кликнул на кнопку дважды');
// }); // Двойной клик мышью


// $('ul li').mouseenter(function(event) {

// 	$(this).css('color', 'red');
// }); // Наведение мыши на элемент


// $('ul li').mousedown(function(event) {
// 	$(this).css('color', 'red');
// }); // Момент нажатия кнопки мыши


// $('ul li').mouseup(function(event) {
// 	$(this).css('color', '#333');
// }); // Момент "отжатия" кнопки мыши :)

// $('ul li').mouseover(function(event) {
// 	$(this).css('color', 'blue');
// });  // Мышь наезжает на площадь элемента

// $('ul li').mouseout(function(event) {
// 	$(this).css('color', 'black');
// }); // Мышь покидает площадь элемента

// $('*').mousemove(function(event) {
// 	$(this).toggleClass('blue');
// }); // Движение мыши над элементом


/* ====== События клавиатуры ===== */

// $('input').keydown(function(event) {
// 	console.log($(this).val())
// }); // Клавиша в нажатом состоянии

// $('input').keyup(function(event) {
// 	$('p').text($(this).val())
// }); // Клавиша больше не в нажатом состоянии
// $('input').keypress(function(event) {
// 	console.log(event.which)
// }); // Ввод символа с клавиатуры 




$(function(){

   

}); // Готовность DOM элементов

// $(window).resize(function(event) {
// 	console.log('размеры окна изменены!')
// });	// Изменение размера (например, окна)


// $('*').scroll(function(event) {
// 	console.log('Страница прокручена')
// }); // Прокрутка элемента



/* ====== Базовые события ===== */

// $('button').click(function(event) {
// 	console.log('Ты нажал на элемент');
// 	$('.divscroll').append('<li>Дополнительный элемент</li>');
// });	// click()

function addAndStop(e) {
$('.divscroll').append('<li>Дополнительный элемент</li>');
$('button').off('click');
}


$('button').on('click',addAndStop);