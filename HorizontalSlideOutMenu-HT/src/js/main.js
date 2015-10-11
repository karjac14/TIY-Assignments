//tggle for panels

$('a#nav-one').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-one').slideToggle('50');
  $('#panel-two,#panel-three,#panel-four,#panel-five').hide(); // to refactor?
  $('a[id*="nav-"]').not(this).removeClass('active'); //refactored
});

$('a#nav-two').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-two').slideToggle('50');
  $('#panel-one,#panel-three,#panel-four,#panel-five').hide(); // to refactor?
  $('a[id*="nav-"]').not(this).removeClass('active'); //refactored
});

$('a#nav-three').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-three').slideToggle('50');
  $('#panel-one,#panel-two,#panel-four,#panel-five').hide(); // to refactor?
  $('a[id*="nav-"]').not(this).removeClass('active'); //refactored
});

$('a#nav-four').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-four').slideToggle('50');
  $('#panel-one,#panel-two,#panel-three,#panel-five').hide(); // to refactor?
  $('a[id*="nav-"]').not(this).removeClass('active'); //refactored
});

$('a#nav-five').on('click', function(){
  $(this).toggleClass('active');
  $('#panel-five').slideToggle('50');
  $('#panel-one,#panel-two,#panel-three,#panel-four').hide(); // to refactor?
  $('a[id*="nav-"]').not(this).removeClass('active'); //refactored
});
