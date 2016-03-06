/*$(function() {
	$("#jnBrandList li").each(function(index) {
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
		$(spanHtml).appendTo(this);
	});
	$("#jnBrandList").delegate(".imageMask","hover",function() {
		alert("test");
		$(this).toggleClass("imageOver");
		//该方法中的delegate方法和live方法差不多，因为“imageMask”元素是
		//被页面加载完成后动态创建的，如果用普通的方式绑定事件没那么不会生效
		//而live有个特性就是即使是后面创建的元素，用它绑定事件一直会生效
		//用delegate（）方法，通过事件委托也能达到也起的效果
	});

})*/

/* 滑过图片出现放大镜效果 */
$(function(){
	$("#jnBrandList li").each(function(index){
		var $img = $(this).find("img");
		var img_w = $img.width();
		var img_h = $img.height();
		var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
		$(spanHtml).appendTo(this);
	})
	$("#jnBrandList").delegate(".imageMask", "hover", function(){
		$(this).toggleClass("imageOver");
	});
	
	
	/*$("#jnBrandList").find(".imageMask").live("hover", function(){
		$(this).toggleClass("imageOver");
	});*/
	
})