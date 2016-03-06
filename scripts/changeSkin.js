$(function() {
	var $li = $("#skin li");
	$li.click(function() {
		switchSkin(this.id);
	});
	var cookie_skin = $.cookie("MyCssSkin");//不懂
	if(cookie_skin) {
		switchSkin(cookie_skin);
	}
});
function switchSkin(skinName) {
	$("#"+skinName).addClass("selected")
		.siblings().removeClass("selected");
		//alert(skinName);
	$("#cssfile").attr("href","styles/skin/"+skinName+".css");
	//设置不同的皮肤
	$.cookie("MyCssSkin",skinName,{path:"/",expires:10});
}