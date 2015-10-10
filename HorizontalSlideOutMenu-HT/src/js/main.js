//tggle for panels

$('a#nav-one').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-one').slideToggle('50');
});

$('a#nav-two').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-two').slideToggle('50');
});

$('a#nav-three').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-three').slideToggle('50');
});

$('a#nav-four').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-four').slideToggle('50');
});

$('a#nav-five').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-five').slideToggle('50');
});
