
//If you're reading this and wondering why
//the code is kind of weird and awkward here,
//it's because I've tried to copy all I needed
//to from the game ledsprites which were used
//before we built the game on ledstrips.
//So some things don't really make sense. 
//As an example, there's direction and everything, but
//deltaX and deltaY would've worked wonderfully well too.

class PositionSprite {

    //variables
    x: number;
    y: number;
    direction: number;

    color: NeoPixelColors;

    theGame: Game;

    show: boolean;
    
    constructor(x: number, y: number, color: NeoPixelColors, theGame: Game) {
        
        this.x = x;
        this.y = y;
        this.direction = 90;

        this.color = color;

        this.theGame = theGame;

        this.show = true;
    }

    //move method
    move():void {
        switch(this.direction) {
            case 0:
                this.y--;
                //These if-statements prevent the sprite from moving out of 
                //the confines of the game matrix
                if(this.y < 0) {
                    this.y = 0;
                }
                break;
            case 90:
                this.x++;
                if(this.x === (this.theGame.matrixWidth)) {
                    this.x--;
                }
                break;
            case 180:
                this.y++;
                if(this.y === (this.theGame.matrixHeight)) {
                    this.y--;
                }
                break;
            case 270:
                this.x--;
                if(this.x < 0) {
                    this.x = 0;
                }
                break;
        }
    }

    //misc methods
    isTouching(other: PositionSprite):boolean {
        return this.x === other.x && this.y === other.y;
    }

    display() {
        if(this.show)
            setLed(this.x, this.y, this.color);
            /*
            let showx = this.x.toString(); 
            let showy = this.y.toString(); 
            basic.showString(showx);
            basic.showString(showy); 
            */

    }

    delete() {
        this.show = false;
    }
    
}