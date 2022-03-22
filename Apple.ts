class Apple {
    
    sprite: game.LedSprite;
    theGame: Game;

    constructor(x: number, y: number, aGame: Game) {
        this.sprite = game.createSprite(x, y);
        this.sprite.changeBrightnessBy(-100);
        this.theGame = aGame;
    }

    newLocation() {
        let maybeX = Math.randomRange(0, 4);
        let maybeY = Math.randomRange(0, 4);

        while(this.theGame.player.x === maybeX && this.theGame.player.y === maybeY) {
            maybeX = Math.randomRange(0, 4);
            maybeY = Math.randomRange(0, 4);
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

}