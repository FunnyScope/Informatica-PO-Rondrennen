
class Game {
    
    apple: Apple;
    player: Player;
    private running = GameState.NotRunning;

    constructor() {

    }


    initialise(player: Player, apple: Apple) {
        this.player = player;
        this.apple = apple;
        this.running = GameState.Running;
        this.main();
    }


    main() {
        //Asynchronous. If you don't understand, replace with while-loop and pause
        while(true) {
            switch(this.running) {
                case GameState.Running:
                    if(this.player.sprite.isTouching(this.apple.sprite)) {
                        this.player.score++;
                        this.apple.newLocation();
                    }
                    if(this.player.checkIfHeadBonked()) {
                        this.running = GameState.NotRunning;
                    }
                    this.player.move();
                    break;
                case GameState.Paused:
                    basic.showString("Paused");
                    break;
                case GameState.NotRunning:
                    //End sequence still needed;
                    this.end();
                    break;
            }
            if(this.running === GameState.NotRunning) {
                break;
            }
            pause(300);
        }

    }

    private end() {
        this.apple.sprite.delete();
        this.player.sprite.delete();
    }

    get gameState():GameState {
        return this.running;
    }

    pause() {
        this.running = GameState.Paused;
    }

    unpause() {
        this.running = GameState.Running;
    }
}

let theGame = new Game();

//Starting the game.
//Don't know if this is a good way doing it
input.onButtonPressed(Button.A, () => {
    if(theGame.gameState === GameState.NotRunning) {
        theGame.initialise(new Player(2, 2), new Apple(4, 2));
    }
})

//Pausing and unpausing
input.onButtonPressed(Button.B, () => {
    if(theGame.gameState === GameState.Running) {
        theGame.pause();
    } else if(theGame.gameState === GameState.Paused) {
        theGame.unpause();
    }
})