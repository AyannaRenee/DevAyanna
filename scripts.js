// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

anime.timeline({ loop: true })
  .add({
    targets: '.ml9 .letter',
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1)
  }).add({
    targets: '.ml9',
    opacity: 0,
    duration: 1000,
    easing: 'easeOutExpo',
    delay: 1000
  })
var foo = 'Copyright \u00A9'
if (typeof UndefinedIdentifier==='undefined')


(function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var footer_top = $("#footer").offset().top;
    var div_top = $('#sticky-anchor').offset().top;
    var div_height = $("#sticky").height();

    if (window_top + div_height > footer_top)
        $('#sticky').removeClass('stick');
    else if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
