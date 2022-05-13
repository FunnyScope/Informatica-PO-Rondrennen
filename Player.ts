
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

    //0, 90, 180, 270 degrees. Top, right, bottom and left respectively.
    get direction() {
        return this.sprite.get(LedSpriteProperty.Direction);
    }
    set direction(direction: number) {
        this.sprite.set(LedSpriteProperty.Direction, direction);
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            // 0 degrees
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            // 90 degrees
        } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            // 180 degrees
        } else if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            // 270 degrees
        }
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