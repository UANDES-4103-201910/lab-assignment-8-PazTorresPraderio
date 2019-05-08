// Note: $(() => {}); is equivalent to $(document).ready(function(){})
$(document).ready(function(){
	$(".key").click(function(){
		console.log($(this).text());
		$("#textbox"());
	});
	$("#buttomHide").click(function(){
		$(".key").hide();

	});
	$("#buttomShow").click(function(){
		$(".key").show();

	});
});
	console.log('Document ready! [app/assets/javascripts/keyboard.js]');

// $("#printingKeys").click(function(){
