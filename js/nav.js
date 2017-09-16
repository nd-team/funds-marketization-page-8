$(window).ready(function () {
	$('.se-nav').click(function(){
		$('.se-nav').removeClass('se-nav-active').eq($(this).index()).addClass('se-nav-active');
	})
	// .se-nav-active的高要用jq算出来
})