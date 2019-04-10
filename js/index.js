'use strict';

var $btn = document.querySelector('.btn');

$btn.addEventListener('click', function (e) {
  window.requestAnimationFrame(function () {
    $btn.classList.remove('is-animating');

    window.requestAnimationFrame(function () {
      $btn.classList.add('is-animating');
    });
  });
});