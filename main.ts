
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
    }


}
