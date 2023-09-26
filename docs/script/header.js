$('body')[0].onclick = function (e) {
  if (event.target.closest('.menu')) {
    $('.menu').addClass('open');
  }
  else {
    $('.menu.open').removeClass('open');
  }
};
$('body')[0].onmousemove = function(e) {
  if (event.target.closest('.menu')) {
    $('.expand-menu2').addClass('open');
  }
  else {
    $('.menu.open').removeClass('open');
  }
};