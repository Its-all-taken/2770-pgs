$(document).ready(function(){
  $(".b-hist").click(function(event){
    $(this).removeClass('faded').siblings('div').addClass('faded');
    $('.h-im').addClass('hist').removeClass('mod');
    $('p').text("Первое предприятие члены семьи Амсет основали в 1620, это был небольшой завод по производству масел для поддержки кварцевых пара-акселераторов. Именно AMSET поставляла 90% масел и других товаров для обслуживания кораблей во время вторжения Цегорах. После окончания конфликта компания смогла продолжить развитие и начала производить первые модули для кораблей.");
  });
  $(".b-modern").click(function(event){
    $(this).removeClass('faded').siblings('div').addClass('faded');
    $('.h-im').addClass('mod').removeClass('hist');
    $('p').text("Сейчас NGC 2770 производит большинство частных пассажирских кораблей в населённых галактиках. Каждое третье судно — результат работы наших инженеров. Кроме развития технологий мы поддерживаем сообщество кастомизации кораблей и гуманитарные инициативы.");
  });
});
