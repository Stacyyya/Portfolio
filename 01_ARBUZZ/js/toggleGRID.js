(function(global){
  'use strict';
  var body = document.body;
  var containers = document.querySelectorAll('.container');
  document.onkeydown = function(event) {
    if(event.keyCode === 71 && event.shiftKey) {
      body.classList.toggle('show-leading');
      Array.prototype.forEach.call(containers, function(container) {
        container.classList.toggle('show-grid');
      });
    }
  };
})(this);