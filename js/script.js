
var ms_img_src = [];

$(".wr_img_sl img").each(function(){
	ms_img_src[ms_img_src.length] = $(this).attr("src");
});

var trX = 220;

var cc = 0;
var deg_ret_all = 360 / ms_img_src.length;
var deg_ret_item = [];

for(var k = 0; k < ms_img_src.length; k++){

    deg_ret_item.push(deg_ret_all * k);

	var deg_ret = 360 / ms_img_src.length;
	deg_ret = deg_ret * k;
	$(".slider").append('<a href="'+ms_img_src[k]+'" rel="example_group" class="item fan" style="background-image: url('+ms_img_src[k]+'); transform: rotateY(0deg) translateX('+trX+'px)"></a>');
}



console.log( 'mmmmmmmmmmm', deg_ret_item );


setTimeout("onSpiral()", 2000);

//--------- FUNCTION -------------------------------

function onSpiral() {
	
	$(".slider .item").each(function(i){
		$(this).css("transform", "rotateY(" + deg_ret_item[i] + "deg) translateX(" + trX + "px)");
	});
	
	setTimeout( ()=>{
		$('.slider').removeClass('begin');
	}, 6000);
	
	$(".fan").fancybox({
		'transitionIn'	: 'elastic',
		'transitionOut'	: 'elastic'
	});
}


var countSl = 0;
var rotateSlX = -17;
var countSlDeg = 360 / ms_img_src.length;

$('.slider').css("transform", "rotateX("+rotateSlX+"deg) rotateY(0deg)");

function next() {
	countSl++;
	var rotetSlider = countSlDeg * countSl;
	$('.slider').css("transform", "rotateX("+rotateSlX+"deg) rotateY(" + rotetSlider + "deg)");
}

function prev() {
	countSl--;
	var rotetSlider = countSlDeg * countSl;
	$('.slider').css("transform", "rotateX("+rotateSlX+"deg) rotateY(" + rotetSlider + "deg)");
}