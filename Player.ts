
class Player {

    sprite: game.LedSprite;

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
    get direction():number {
        return this.sprite.get(LedSpriteProperty.Direction);
    }

    move():void {
        this.sprite.move(1);
    }
}