$(document).ready(function(){

var cardslider = $('.my-slider').cardslider({
				swipe: true,
				dots: true,
				loop: true,
				direction: "right",
				nav: false
			}).data('cardslider');

			$('.skiplink').on('click', function(e) {
				e.preventDefault();
				cardslider.changeCardTo('last');
			});



$('.my-cardslider').cardslider({
});



});