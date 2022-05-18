class Apple {
    
    //variables
    sprite: PositionSprite;
    theGame: Game;

    constructor(x: number, y: number, aGame: Game) {
        this.sprite = new PositionSprite(x, y, NeoPixelColors.Green, aGame);
        this.theGame = aGame;
    }

    //Generates a new location for the apple
    newLocation() {
        let maybeX = Math.randomRange(0, theGame.matrixWidth);
        let maybeY = Math.randomRange(0, theGame.matrixHeight);

        while(this.theGame.player.x === maybeX && this.theGame.player.y === maybeY) {
            maybeX = Math.randomRange(0, theGame.matrixWidth);
            maybeY = Math.randomRange(0, theGame.matrixHeight);
        }

        this.x = maybeX;
        this.y = maybeY;
    }

    //Getters and setters for xy
    get x():number {
        return this.sprite.x;
    }
    set x(x: number) {
        this.sprite.x = x;
    }

    get y():number {
        return this.sprite.y;
    }
    set y(y: number) {
        this.sprite.y = y;
    }

    

}