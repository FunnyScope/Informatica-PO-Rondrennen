
class Game {
    
    apple: Apple;
    player: Player;

    constructor(player: Player, apple: Apple) {
        this.player = player;
        this.apple = apple;
        this.main();
    }


    main() {
        loops.everyInterval(100, () => {
            this.player.move();
            //Collision detection is needed, among other things
        })


        this.end();
    }

    private end() {
        this.apple.sprite.delete();
        this.player.sprite.delete();
    }
}

let theGame: Game;

input.onButtonPressed(Button.A, () => {
    theGame = new Game(new Player(2, 2), new Apple(4, 3));
})
