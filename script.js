$(document).ready(function() {
	$(".fumblecount").html($(".fumble .item").length);
	$(".criticalcount").html($(".critical .item").length);
	
	$(".frontback").click(function() {
		$(".items").toggleClass("backside");
	});
});