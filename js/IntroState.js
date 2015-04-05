"use strict";

function IntroState(){};

IntroState.prototype =
{
    //create intro sprite
    create: function()
    {
        console.log("Intro");
        
        //set the start variables for the game
        
    },
    
    update: function()
    {
        //wait for click input go to play
        if(this.game.input.activePointer.isDown)
        {
            this.game.state.start("play");
        }
    }
};
