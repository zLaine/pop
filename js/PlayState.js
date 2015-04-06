"use strict";

function PlayState(){};

PlayState.prototype =
{
    create: function()
    {
        console.log("Play");
        
        this.bubbleCounter = 0;
        
        this.bubbles = this.game.add.group();
        this.bubbles.enableBody = true;
        this.bubbles.inputEnabled;
        this.createBubbles(20);
        
    },
    
    update: function()
    {
        
    },
    
    bubbleClick: function(bubble)
    {
        this.bubbleCounter--;
        //play sound here
        this.destroy();
    },
    
    createBubbles: function(n)
    {
        for(var i = 0; i < n; i++)
        {
            var x = this.game.rnd.integerInRange(0, 770);
            var y = this.game.rnd.integerInRange(0, 570);
            var bubbleColor = this.game.rnd.integerInRange(0,7);
            
            var bubble = this.bubbles.create(x,y, "bubbles", bubbleColor);
            var scale = this.game.rnd.integerInRange(1, 2);
            bubble.scale.set(scale);
            
            bubble.body.collideWorldBounds = true;
            bubble.body.immovable = true;
            
            bubble.events.onInputDown.add(this.bubbleClick, this);
            //this.bubbleClick(bubble);
            this.bubbleCounter++;
            
        }
    }
    
    
};
