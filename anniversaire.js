var $item1 = $('#item1');
var $item2 = $('#item2');
var $item3 = $('#item3');
var $item4 = $('#item4');
var $corps = $('body');
var player = $('#item4');
var beep = new Audio(); 
beep.src = "son.mp3";

$item1.on('click', function(){
	$item2.slideDown(1000);
});
$item2.on('click', function(){
	$item3.slideDown(1000);
});

$item3.on('click', function(){
	beep.play();
	$item1.hide();
	$item2.hide();
	$item3.hide();
	$item4.css("background-color", "#81DAFF");
	$item4.css("color", "#FFF");
	$item4.width('800px');
	$item4.fadeIn(2000);
	$corps.css("background-image", "url('img/fond.jpg')");
	$corps.css("background-size", "100%");
	
});