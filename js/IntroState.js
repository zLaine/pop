"use strict";

function IntroState(){};

IntroState.prototype =
{
    //create intro sprite
    create: function()
    {
        console.log("Intro");
        
        var startScreen = this.game.add.sprite(0,0, 'startScreen');
        
        //set the start variables for the game
        
        this.game.level = 0;
	this.game.score = 0;
        
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
