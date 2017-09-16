$(window).ready(function () {
	window.onresize=resizeBannerImage;
	function resizeBannerImage(){
		var r=$(window).width()/1903;
		$('.zj-r-abso').css("transform","scale(" + r + ")");
		$('.sry-r-abso').css("transform","scale(" + r + ")"); 
		$('.sry-l-abso').css("transform","scale(" + r + ")");  
		$('.gszl-r-abso').css("transform","scale(" + r + ")");
		$('.jjgl-r-abso').css("transform","scale(" + r + ")");
		$('.yjyfk-r-abso').css("transform","scale(" + r + ")");
	}
	
})