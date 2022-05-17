
function epicStartUpEffects (x: number,y: number) {
    let theGame: Game;
    let matrixWidth = theGame.matrixWidth;
    let matrixHeight = theGame.matrixHeight;
    let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);
    // check if y is even
    if (y % 2 == 0) {
        // y is even
        let ledNumber = y * matrixWidth + (matrixWidth - 1 - x + 4);
        strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Green));
        strip.show();
    } else {
        // y is odd
        let ledNumber = y * matrixWidth + (x + 4);
        strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Green));
        strip.show();
    }
    pause(100); 
}

for (let y = 1; y < 5; y++) {
    for (let x = 2; x < 5; x++) {
        epicStartUpEffects(x, y);
    }
}