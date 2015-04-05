"use strict";

function PreloadState(){};

PreloadState.prototype =
{
    //load assets for the game
    preload: fucntion()
    {
        /* Set-up the loading bar */
    /*        var loadingBar = this.add.sprite(400,300,"loading");
            loadingBar.anchor.setTo(0.5,0.5);
            this.load.setPreloadSprite(loadingBar); */
            
        /* Load tile map */
        
        /* Load images */

        /* Load spritesheets */
            
        /* Load sounds */
            this.game.load.audio("bgm", "assets/Reunited.mp3");
    },
    
    create: function()
    {
        console.log("Preloaded");
        
        //start BGM here?  
    }
};
