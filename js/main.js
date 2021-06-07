$(document).ready(function(){

  $(".select").click(function(event){
		$('.select').removeClass('select-ch')
    $(this).addClass('select-ch')
	})

	$('input, textarea').not("input[name=appr]").blur(function(){
    if(!$(this).val()){
        $(this).addClass("error");
				$(this).siblings("p").addClass("errort");
    } else{
        $(this).removeClass("error");
				$(this).siblings("p").removeClass("errort");
    }
  });

	$("#send").click(function() {
		$('input, textarea').not("input[name=appr]").not('input[name=subm]').each(function(){
			if (!$(this).val()) {
				$(this).addClass("error");
				$(this).siblings("p").addClass("errort");
			}
			if ($('input, textarea').val()){
				location.reload();
			}
		})
	});

	$(".buy").click(function(){
		$('.select').removeClass('select-ch');
    $('.select').css("pointer-events","none");
    $('.overl').css('opacity','1');
    $('.select').addClass('disable');
    $(this).addClass('disable');
    $(this).text('Куплено');
    setTimeout(function(){
      $('.overl').css("background-position","left");
    }, 200);
    setTimeout(function(){
      $('.overl').css('opacity','0');
    }, 400);
	});

  $(".like").click(function(){
    $(this).removeClass('like-o');
    $(this).addClass('like-w');
  });
});
