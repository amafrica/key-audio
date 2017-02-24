$(document).ready(function() {

  $(window).on('keydown', function(e) {
    // $('*[data-key="65"]');
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();

    // $(key).addClass('pressed');

    // if (key).on('keydown', function(e) {
    //   $(key).addClass('pressed');
    // }



    // $(function removeTransition(e) {
    //   console.log('hello');
    //   $(this).removeClass('pressed');
    // });

    // function removeTransition(e) {
    //   if (e.propertyName !== 'transform') return;
    //   this.classList.remove('pressed');
    //   // $(this).removeClass('pressed');
    // }

    // const keys = document.querySelectorAll('.key');
    // // keys.forEach(key => key.addEventListener('transitionend', removeTransition);
    // $(keys).each(key => key.on('transitionend', removeTransition()));


  });




});
