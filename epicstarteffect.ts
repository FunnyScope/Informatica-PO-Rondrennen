function startup () {
    let matrixWidth = this.matrixWidth;
    let matrixHeight = this.matrixHeight;
    let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);
    let x = this.x;
    let y = (matrixHeight - 1) - this.y;
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
}