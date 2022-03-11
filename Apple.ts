class Apple {
    
    sprite: game.LedSprite;

    constructor(x: number, y: number) {
        this.sprite = game.createSprite(x, y);
    }

    get x() {
        return this.sprite.get(LedSpriteProperty.X);
    }
    set x(x: number) {
        this.sprite.set(LedSpriteProperty.X, x);
    }

    get y() {
        return this.sprite.get(LedSpriteProperty.Y);
    }
    set y(y: number) {
        this.sprite.set(LedSpriteProperty.Y, y);
    }

}