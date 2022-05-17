
class Player {

    sprite: game.LedSprite;
    score = 0;

    constructor(x: number, y: number) {
        this.sprite = game.createSprite(x, y);
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

    display(){
        let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);
        let matrixWidth = 8;
        let matrixHeight = 7; 
        let x = this.x;
        let y = (matrixHeight - 1) -this.y; 
        // check if y is even
        if (y % 2 == 0) {
            // y is even
            let ledNumber = y * matrixWidth + (matrixWidth - 1 - x + 4);
            strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Red));
            strip.show();
        } else {
            // y is odd
            let ledNumber = y * matrixWidth + (x + 4);
            strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Red));
            strip.show();
        }
    }

    //0, 90, 180, 270 degrees. Top, right, bottom and left respectively.
    get direction() {
        return this.sprite.get(LedSpriteProperty.Direction);
    }
    set direction(direction: number) {
        this.sprite.set(LedSpriteProperty.Direction, direction);
    }
    
    move():void {
        this.sprite.move(1);
    }

    //Checks if the sprite is touching an edge,
    //and if it would pass through on the next tick
    checkIfHeadBonked():boolean {
        
        if(this.x === 0 && this.direction === 270) {
            return true;
        }
        if(this.x === 4 && this.direction === 90) {
            return true;
        }
        if(this.y === 0 && this.direction === 0) {
            return true;
        }
        if(this.y === 4 && this.direction === 180) {
            return true;
        }

        return false;
    }
    
}