$(document).ready(function(){

	$(".image").width($(".missions").width()/3.3);

	$(window).resize(function(){
		$(".image").width($(".missions").width()/3.3);
	})

	$(".image").mouseover(function(){
		$(".image").width($(".missions").width()/4)
		$(".image").css({"z-index":"-999px"});
		$(this).css({"z-index":"999px"})
		$(this).width($(".missions").width()/2)
	})

	$(".image").mouseout(function(){
		$(".image").width($(".missions").width()/3.3)
		$(this).css({"z-index":0})
	})

	$(".image:last-child").mouseover(function(event){
		$(".image").width($(".missions").width()/5)
		$(".image").css({"z-index":"-999px"});
		$(this).css({"z-index":"999px"})
		$(this).width($(".missions").width()/1.5)
	})

  $(".select").click(function(event){
		$(this).toggleClass("select-ch");
		$('select select-ch').not(this).removeClass('select-ch');

		// $('.select').toggleClass('.select-ch').siblings().removeClass('.select-ch');
  })

});
