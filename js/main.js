$(document).ready(function(){
	
	$('.news').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		arrows : false
	});

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

	$('textarea').blur(function(){
	   if(!$(this).val()){
	     $(this).addClass("error");
			 $(this).siblings("p").addClass("errort");
	   } else{
	     $(this).removeClass("error");
			 $(this).siblings("p").removeClass("errort");
	   }
   });

	$("#send").click(function() {
		if(!$('input').val()){
			$('input').not('input[name=subm]').not("input[name=appr]").addClass("error");
			$('input').siblings("p").addClass("errort");
		} else{
			$('input').not('input[name=subm]').not("input[name=appr]").removeClass("error");
			$('input').siblings("p").removeClass("errort");
		}
	 if($('input').val() && $('textarea').val()) {
		 $('input').not('input[name=subm]').not("input[name=appr]").val('');
		 $('textarea').val('');
	 }
	});

	$("#send").click(function() {
		if(!$('textarea').val()){
			$('textarea').addClass("error");
			$('textarea').siblings("p").addClass("errort");
		} else{
			$('textarea').removeClass("error");
			$('textarea').siblings("p").removeClass("errort");
		}
	 if($('textarea').val()) {
		 $('textarea').val('');
	 }
	});

});
