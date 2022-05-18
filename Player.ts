
class Player {
    //Variables
    sprite: PositionSprite;
    score = 0;

    constructor(x: number, y: number, game: Game) {
        this.sprite = new PositionSprite(x, y, NeoPixelColors.Red, game);
    }

    //Getters and setters for xy
    get x(): number {
        return this.sprite.x;
    }
    set x(x: number) {
        this.sprite.x = x;
    }

    get y(): number {
        return this.sprite.y;
    }
    set y(y: number) {
        this.sprite.y = y;
    }
    

    //0, 90, 180, 270 degrees. Top, right, bottom and left respectively.
    get direction() {
        return this.sprite.direction;
    }
    set direction(direction: number) {
        this.sprite.direction = direction;
    }
    
    move():void {
        this.sprite.move();
    }

    //Checks if the sprite is touching an edge,
    //and if it would pass through on the next tick
    checkIfHeadBonked(): boolean {

        if (this.x === 0 && this.direction === 270) {
            return true;
        }
        if(this.x === (theGame.matrixWidth -1) && this.direction === 90) {
            return true;
        }
        if (this.y === 0 && this.direction === 0) {
            return true;
        }

        if(this.y === (theGame.matrixHeight -1) && this.direction === 180) {
            return true;
        }

        return false;
    }

}