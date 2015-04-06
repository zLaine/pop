"use strict";

function PlayState(){};

PlayState.prototype =
{
    create: function()
    {
        console.log("Play");
        
        this.bubbles = this.game.add.group();
        this.bubbles.enableBody = true;
        this.bubbles.inputEnabled;
        this.createBubbles(9);
    },
    
    update: function()
    {
        
    },
    
    createBubbles: function(n)
    {
        for(var i = 0; i < n; i++)
        {
            var x = this.game.rnd.integerInRange(100, 770);
            var y = this.game.rnd.integerInRange(0, 570);
            var bubbleColor = this.game.rnd.integerInRange(0,7);
            
            var bubble = this.bubbles.create(x,y, "bubbles", bubbleColor);
            var scale = this.game.rnd.integerInRange(1, 3);
            bubble.scale.set(scale);
            
            bubble.body.collideWorldBounds = true;
            bubble.body.immovable = true;
            
        }
    }
};
