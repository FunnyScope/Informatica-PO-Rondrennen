
class Game {
    
    apple: Apple;
    player: Player;
    private running = GameState.NotRunning;

    highscore: number = 0;

    otherHighscores: number[] = [];

    readonly radioGroup = 38;

    speed: number = 500;

    constructor() {
        radio.setGroup(this.radioGroup);
    }


    initialise(player: Player, apple: Apple) {
        this.player = player;
        this.apple = apple;
        this.running = GameState.Running;
        this.main();
    }


    main() {
        while(true) {
            let ended = false;
            switch(this.running) {
                case GameState.Running:
                    if(this.player.sprite.isTouching(this.apple.sprite)) {
                        this.player.score++;
                        this.apple.newLocation();
                        this.speed -= 10;
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
                    ended = true;
                    break;
            }
            if(ended) 
                break;
            pause(this.speed);
        }
 
    }

    private end() {
        this.apple.sprite.delete();
        this.player.sprite.delete();
        basic.showString("Final score: " + this.player.score);
        if(this.player.score > this.highscore) {
            
            this.highscore = this.player.score;
            radio.sendNumber(this.player.score);
            basic.showString("New highscore!");

        }
        this.player.score = 0;
    }

    get gameState():GameState {
        return this.running;
    }

    set gameState(gameState: GameState) {
        this.running = gameState;
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
        theGame.initialise(new Player(2, 2), new Apple(4, 2, theGame));
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

//Highscore system
input.onButtonPressed(Button.AB, () => {
    if(theGame.gameState !== GameState.NotRunning) return;
    
    theGame.gameState = GameState.Occupied;

    for(let i = 0; i < theGame.otherHighscores.length; i++) {
        basic.showNumber(theGame.otherHighscores[i]);
    }
    basic.showString("You: " + theGame.highscore);

    theGame.gameState = GameState.NotRunning;
})

//Doesn't remove "bad" highscores, can't be bothered to fix
radio.onReceivedNumber((value: number) => {
    theGame.otherHighscores.push(value); 
})

loops.everyInterval(5, () => {
    if (theGame.gameState === GameState.Running) {
        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            // 0 degrees
            theGame.player.direction = 0
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            // 90 degrees
            theGame.player.direction = 90
        } else if (pins.digitalReadPin(DigitalPin.P0) == 1) {
            // 180 degrees
            theGame.player.direction = 180
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            // 270 degrees
            theGame.player.direction = 270
        }
    }
})