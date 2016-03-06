$(function() {
	$("#nav li").hover(function() {
		//alert("hello");
		$(this).find(".jnNav").show();
	},function() {
		$(this).find(".jnNav").hide();
	});
});