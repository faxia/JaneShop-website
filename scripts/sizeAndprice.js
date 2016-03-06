$(function() {
	$(".pro_size li").click(function() {
		$(this).addClass("cur").siblings().removeClass("cur");
		$(this).parent("ul").siblings("strong")
			.text($(this).text());
	});

	var $span = $(".pro_price strong");
	var price = $span.text();
	$("#num_sort").change(function() {
		var num = $(this).val();//获取数量
		var amount = num * price;
		$span.text(amount);
	}).change();
	//防止表单元素刷新后依旧保持原来的值引起的价格变动而没有联动问题
	//需要在页面刚加载时，为元素绑定change事件之后立即触发change事件
})