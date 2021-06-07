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
});
