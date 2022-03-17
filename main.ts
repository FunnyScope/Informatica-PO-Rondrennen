
class Game {
    
    apple: Apple;
    player: Player;
    running = GameState.NotRunning;

    constructor(player: Player, apple: Apple) {
        this.player = player;
        this.apple = apple;
        this.main();
    }


    main() {
        //Asynchronous. If you don't understand, replace with while-loop and pause
        loops.everyInterval(100, () => {
            switch(this.running) {
                case GameState.Running:
                    this.player.move();
                    break;
                case GameState.Paused:
                    basic.showString("Paused");
                    break;
                case GameState.NotRunning:
                    this.end();
                    break;
            }
            //Collision detection is needed, among other things
        })

    }

    private end() {
        this.apple.sprite.delete();
        this.player.sprite.delete();
    }
}

let theGame = new Game(new Player(2, 2), new Apple(4, 2));

