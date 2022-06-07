"use script"


/*var a = parseInt(prompt ("Какой сайт Вам необходим?:  1 - Сайт-Визитка, 2 - Интернет-магазин, 3 - Корпоратиный сайт"));
if (a == "1"){
//выполняешь расчет
} else if (a == "2"){
//выполняешь расчет
}else if (a == "3"){
//выполняешь расчет
}else{
alert("Возможно Вы опечатались");
}

var b = parseInt(prompt ("Дизайн?: 1 - Шаблонный, 2 - Уникальный"));
if (b == "1"){
//выполняешь расчет
} else if (b == "2"){
//выполняешь расчет
}else{
alert("Вы выбрали что-то не то");
}


var c = parseInt(prompt ("Тип верстки?: 1 - Резиновая, 2 - Адаптивная"));
if (c == "1"){
//выполняешь расчет
} else if (c == "2"){
//выполняешь расчет
}else{
alert("Вероятно, Вы ошиблись");
}
var summa = a + b + c;  
alert("Сумма = " + summa * 2000);
*/


$(document).ready(function() {

	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-fit-width').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', 
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 
		}
	});

});

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 100;
  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
  e.preventDefault();
});





$(document).ready (function(){
    let options = {threshold:[0,5]};
    let observer = new IntersectionObserver(onEntry,options);
    let elements = $(".element-animation");
    elements.each (i,el)=>{
        observer.observe(el);
    }
});
function onEntry (entry){
    entry.forEach(change=>{
        if (change.isIntersecting){
            change.target.src = change.target.dataset.src;
        }
        
    });
}
