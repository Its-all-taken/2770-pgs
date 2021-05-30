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
		$('.select').removeClass('select-ch')
    $(this).addClass('select-ch')
	})

	$('input').not("input[name=appr]").blur(function(){
    if(!$(this).val()){
        $(this).addClass("error");
				$(this).siblings("p").addClass("errort");
    } else{
        $(this).removeClass("error");
				$(this).siblings("p").removeClass("errort");
    }
  });

	$('#text-b').blur(function(){
	   if(!$(this).val()){
	     $(this).addClass("error");
			 $(this).siblings("p").addClass("errort");
	   } else{
	     $(this).removeClass("error");
			 $(this).siblings("p").removeClass("errort");
	   }
   });
});
