$(window).ready(function () {
	window.onresize=resizeBannerImage;
	function resizeBannerImage(){
		var r=$(window).width()/1903;
		// $('.zj-r-abso').css("transform","scale(" + r + ")");
		// $('.sry-r-abso').css("transform","scale(" + r + ")"); 
		// $('.sry-l-abso').css("transform","scale(" + r + ")");  
		// $('.gszl-r-abso').css("transform","scale(" + r + ")");
		// $('.jjgl-r-abso').css("transform","scale(" + r + ")");
		// $('.yjyfk-r-abso').css("transform","scale(" + r + ")");
	}
	$('.htdj input').click(function(){
		$('.htdj-ba-tab').removeClass('htdj-ba-act').eq($(this).index()-3).addClass('htdj-ba-act');
		$('.htdj button').removeClass('htdj-act').eq($(this).index()-3).addClass('htdj-act');
		$('.htdj input').removeClass('htdj-act3').eq($(this).index()-3).addClass('htdj-act3');
	})
	$('.htdj button').click(function(){
		$('.htdj-ba-tab').removeClass('htdj-ba-act').eq($(this).index()-7).addClass('htdj-ba-act');
		$('.htdj button').removeClass('htdj-act').eq($(this).index()-7).addClass('htdj-act');
		$('.htdj input').removeClass('htdj-act3').eq($(this).index()-7).addClass('htdj-act3');
	})
	$('.four-left').click(function(){
		$('.four-back').css("left","-306px");
	})
	$('.four-right').click(function(){
		$('.four-back').css("left","0px");
	})
})