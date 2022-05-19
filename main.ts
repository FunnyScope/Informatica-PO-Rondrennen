
class Game {
    
    //variables
    apple: Apple;
    player: Player;
    private running = GameState.NotRunning;

    //radio and highscore related
    highscore: number = 0;
    otherHighscores: number[] = [];
    readonly radioGroup = 38;

    speed: number = 500;

    //ledstrips
    matrixWidth = 8; 
    matrixHeight = 7; 

    constructor() {
        radio.setGroup(this.radioGroup);
    }

    //Initialises the game, so we can keep the object at all times. 
    //Kind of useful.
    initialise(player: Player, apple: Apple) {
        this.player = player;
        this.apple = apple;
        this.running = GameState.Running;
        this.main();
    }

    
    //Main gameplay loop
    main() {
        while(true) {

            let ended = false;

            switch(this.running) {
                //Game running
                case GameState.Running:

                //Checks if the player has the same position as the apple
                    if(this.player.sprite.isTouching(this.apple.sprite)) {
                        this.player.score++;
                        this.apple.newLocation();
                        this.speed -= 10;
                        if(this.speed < 100) this.speed = 100;
                    }

                    //Checks if the player has died
                    if(this.player.checkIfHeadBonked()) {
                        this.running = GameState.NotRunning;
                    }
                    //updates things.
                    this.clearScreen();
                    this.player.move();
                    this.apple.sprite.display();
                    this.player.sprite.display();
                    strip.show(); 
                    break;

                //Game paused
                case GameState.Paused:
                    basic.showString("Paused");
                    break;

                //Player suffered from a skill issue and had a game-over
                case GameState.NotRunning:
                    this.end();

                    ended = true;
                    break;
            }
            //If the game has ended we just break out of this method
            if(ended) 
                break;
            
            pause(this.speed);
        }
 
    }

    //Ends the game
    private end() {
        this.apple.sprite.delete();
        this.player.sprite.delete();
        this.clearScreen();
        strip.show();
        basic.showString("Final score: " + this.player.score);


        //Highscore management
        if(this.player.score > this.highscore) {
            
            this.highscore = this.player.score;
            radio.sendNumber(this.player.score);
            basic.showString("New highscore!");

        }
        this.player.score = 0;

        this.speed = 500;
    }

    //misc methods
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

    clearScreen() {
        displaySquare(0, 7, 0, 8, neopixel.colors(NeoPixelColors.Black));
    }
}

let theGame = new Game();

//Starting the game.
input.onButtonPressed(Button.A, () => {
    if(theGame.gameState === GameState.NotRunning) {
        /*
        // red square
        displaySquare(1, 6, 1, 6, neopixel.colors(NeoPixelColors.Red));

        pause(1000);
        // square uit
        displaySquare(1, 6, 1, 6, neopixel.colors(NeoPixelColors.Black));

        pause(1000);
        // orange square
        displaySquare(1, 6, 1, 6, neopixel.colors(NeoPixelColors.Orange));

        pause(1000);
        // square uit
        displaySquare(1, 6, 1, 6, neopixel.colors(NeoPixelColors.Black));

        pause(1000);
        // green square
        displaySquare(1, 6, 1, 6, neopixel.colors(NeoPixelColors.Green));

        pause(1000);

        // sets "GO"
        let GO = [
            // "GO"
            [0, 1, 1, 0, 0, 0, 1, 0],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 1, 0, 1, 0, 1],
            [0, 1, 1, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0,],
        ];

        //shows "GO"
        setLedsOnOrOffByArray(GO, neopixel.colors(NeoPixelColors.Purple));

        pause(1000);
        */
        displaySquare(0, 7, 0, 8, neopixel.colors(NeoPixelColors.Black));


        theGame.initialise(new Player(2, 2, theGame), new Apple(4, 2, theGame));
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

//Doesn't remove "bad" highscores. Might change that later
radio.onReceivedNumber((value: number) => {
    theGame.otherHighscores.push(value); 
})

//Input detection
loops.everyInterval(5, () => {
    if (theGame.gameState === GameState.Running) {

        if (pins.digitalReadPin(DigitalPin.P8) == 1) {
            // 0 degrees
            theGame.player.direction = 0
        } else if (pins.digitalReadPin(DigitalPin.P12) == 1) {
            // 90 degrees
            theGame.player.direction = 90
        } else if (pins.digitalReadPin(DigitalPin.P2) == 1) {
            // 180 degrees
            theGame.player.direction = 180
        } else if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            // 270 degrees
            theGame.player.direction = 270
        }
    }
})