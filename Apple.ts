class Apple {
    
    sprite: game.LedSprite;
    theGame: Game;

    constructor(x: number, y: number, aGame: Game) {
        this.sprite = game.createSprite(x, y);
        this.sprite.changeBrightnessBy(-100);
        this.theGame = aGame;
    }

    newLocation() {
        let maybeX = Math.randomRange(0, theGame.matrixWidth);
        let maybeY = Math.randomRange(0, theGame.matrixHeight);

        while(this.theGame.player.x === maybeX && this.theGame.player.y === maybeY) {
            maybeX = Math.randomRange(0, theGame.matrixWidth);
            maybeY = Math.randomRange(0, theGame.matrixHeight);
        }

        this.sprite.set(LedSpriteProperty.X, maybeX);
        this.sprite.set(LedSpriteProperty.Y, maybeY);
    }

    //Getters and setters for xy
    get x():number {
        return this.sprite.get(LedSpriteProperty.X);
    }
    set x(x: number) {
        this.sprite.set(LedSpriteProperty.X, x);
    }

    get y():number {
        return this.sprite.get(LedSpriteProperty.Y);
    }
    set y(y: number) {
        this.sprite.set(LedSpriteProperty.Y, y);
    }

    /*
    display() {
        let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);
        let matrixWidth = theGame.matrixWidth;
        let matrixHeight = theGame.matrixHeight; 
        let x = this.x;
        let y = (matrixHeight - 1) - this.y;
        // check if y is even
        if (y % 2 == 0) {
            // y is even
            let ledNumber = y * matrixWidth + (matrixWidth - 1 - x + 4);
            strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Green));
            strip.show();
        } else {
            // y is odd
            let ledNumber = y * matrixWidth + (x + 4);
            strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Green));
            strip.show();
        }
    }
    */
    

}