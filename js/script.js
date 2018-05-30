
var ms_img_src = [];

$(".wr_img_sl img").each(function(){
	ms_img_src[ms_img_src.length] = $(this).attr("src");
});

var trX = 220;

for(var k = 0; k < ms_img_src.length; k++){
	var deg_ret = 360 / ms_img_src.length;
	deg_ret = deg_ret * k;
	//$("#cube").append('<div class="fig-'+k+' cn-img" style="background: url('+ms_img_src[k]+') no-repeat; -webkit-transform: rotateX(0deg) rotateY('+deg_ret+'deg) translateX(30px) translateY(0px) translateZ(0px);"><span>'+ k +'</span></div>');
	$(".slider").append('<a href="'+ms_img_src[k]+'" rel="example_group" class="item fan" style="background-image: url('+ms_img_src[k]+'); transform: rotateY(0deg) translateX('+trX+'px)"></a>');
}


setTimeout("onSpiral()", 2000);

//--------- FUNCTION -------------------------------

function onSpiral() {
	var cc = 0;
	var deg_ret = 360 / ms_img_src.length;
	
	$(".slider .item").each(function(){
		var deg_ret_item = deg_ret * cc;
		$(this).css("transform", "rotateY(" + deg_ret_item + "deg) translateX(" + trX + "px)");
		cc++;
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
var rotateSlX = -20;
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