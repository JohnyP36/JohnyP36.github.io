// https://www.nicesnippets.com/blog/jquery-get-and-set-image-src-example-tutorial
// https://stackoverflow.com/questions/53124502/javascript-video-pause-is-not-a-function

$modalIframe = $('#iframes');
$modalIframeLink = $('a[href].url');

$($modalIframeLink).each(function() {
  $(this)[0].onclick = function(e) {
    setTimeout(function () {
      $modalIframe.css('display','block');
    }, 300);
  };
})

$($modalIframe)[0].onclick = function(e) {
  if (event.target.matches('.modal-close')) {
    $(this).css('display','none');
    $('iframe.iframe').remove();
    $('<iframe class="iframe" name="Iframe">').insertBefore('.modal-content > .modal-close');
  }
};