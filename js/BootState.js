//handles the preloading

"use strict";

var BootState = function(){};

BootState.prototype = 
{
  preload: function()
  {
    this.game.load.image("loading","assets/loading.png");
  }
}
