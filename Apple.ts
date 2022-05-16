class Apple {
    
    matrixWidth = 7; 
    matrixHeight = 6; 

    sprite: game.LedSprite;
    theGame: Game;

    constructor(x: number, y: number, aGame: Game) {
        this.sprite = game.createSprite(x, y);
        this.sprite.changeBrightnessBy(-100);
        this.theGame = aGame;
    }

    newLocation() {
        let maybeX = Math.randomRange(0, (this.matrixWidth - 1));
        let maybeY = Math.randomRange(0, (this.matrixHeight - 1));

        while(this.theGame.player.x === maybeX && this.theGame.player.y === maybeY) {
            maybeX = Math.randomRange(0, (this.matrixWidth - 1));
            maybeY = Math.randomRange(0, (this.matrixHeight - 1));
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

    display() {
        let matrixWidth = this.matrixWidth; 
        let matrixHeight = this.matrixHeight; 
        let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);
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
}