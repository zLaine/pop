"use strict";

function PlayState(){};

PlayState.prototype =
{
    create: function()
    {
        console.log("Play");
        
        this.bubbleCounter = 0;
        this.timer
        
        this.bubbles = this.game.add.group();
        this.bubbles.enableBody = true;
        this.bubbles.inputEnabled = true;
        this.createBubbles(20);
        
        this.timer = this.game.time.events.add(Phaser.Timer.SECOND * 5, this.createBubbles(5), this);
    },
    
    update: function()
    {
        
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
            bubble.inputEnabled = true;
            
            bubble.events.onInputDown.add(this.bubbleClick, this);
           // this.bubbleClick(bubble);
            this.bubbleCounter++;
        }    
    },
    
    bubbleClick: function(bubble)
    {
        console.log("In bubbleClick");
        //this.bubbleCounter--;
        //play sound here
        bubble.destroy();
    }
    
    
};
