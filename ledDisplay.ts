/*
let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
let matrixWidth = 8

let x = 2
let y = 2

// check if y is even
if (y % 2 == 0) {
    // y is even
    let ledNumber = y * matrixWidth + (matrixWidth - 1 - x + 4)
    strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Green))
    strip.show()
} else {
    // y is odd
    let ledNumber = y * matrixWidth + (x + 4)
    strip.setPixelColor(ledNumber, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
*/