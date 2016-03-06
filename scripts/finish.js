$(function() {
	var $product = $(".jnProDetail");
	$("#cart a").click(function() {
		var pro_name = $product.find("h4:first").text();
		var pro_size = $product.find(".pro_size strong").text();
		var pro_color = $(".color_change strong").text();
		var pro_num = $product.find("#num_sort").val();
		var pro_price = $product.find(".pro_price strong").text();
		var dialog = "感谢您购买。\n您购买的\n"+
					"产品是: "+pro_name+";\n"+
					"尺寸是: "+pro_size+";\n"+
					"颜色是: "+pro_color+";\n" +
					"数量是: " + pro_num + ";\n" +
					"总价是: " + pro_price + "元";
		alert(dialog);
		/*var dialog = "感谢您的购买。<div style='font-size:12px;font-weight:400;'>您购买的产品是："+pro_name+"；"+"尺寸是："+pro_size+"；"+"颜色是："+pro_color+"；"+"数量是："+pro_num+"；"+"总价是："+pro_price +"元。</div>";
		$("#jnDialogContent").html(dialog);
		$('#basic-dialog-ok').modal();*/
		return false;//避免页面跳转
	})
})