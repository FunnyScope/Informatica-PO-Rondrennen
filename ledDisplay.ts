let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);

function setLed(x: number, y: number, color: number) {
    let matrixWidth = theGame.matrixWidth;
    let matrixHeight = theGame.matrixHeight;
    y = matrixHeight - 1 - y; 
    // check if y is even
    if (y % 2 == 0) {
        // y is even
        let ledNumber = y * matrixWidth + (matrixWidth - 1 - x + 4);
        strip.setPixelColor(ledNumber, color);
    } else {
        // y is odd
        let ledNumber = y * matrixWidth + (x + 4);
        strip.setPixelColor(ledNumber, color);
    }
}
/*
function makeArrayFromAppleAndPlayer(y: number, x: number, color: number) {
    let newLedPixels = [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ];
    newLedPixels[y][x] = color;

    //loops through array 
    for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 8; x++) {
            if (newLedPixels[y][x] !== null) {
                setLed(x, y, newLedPixels[y][x]);
            } else if (newLedPixels[y][x] == 0) {
                let off = neopixel.colors(NeoPixelColors.Black);
                setLed(x, y, off);
            }
        }
    }
}
*/
/*
function addressColorOfLedsByArray(newLedPixels: number[][], color: number) {
    for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 8; x++) {
            if (newLedPixels[y][x] !== null) {
                setLed(x, y, newLedPixels[y][x]);
            } else if (newLedPixels[y][x] == 0) {
                let off = neopixel.colors(NeoPixelColors.Black);
                setLed(x, y, off);
            }
        }
    }
}
*/


//for displaying a square
function displaySquare(leftY: number, rightY: number, leftX: number, rightX: number, color: number) {
    for (let y = leftY; y < rightY; y++) {
        for (let x = leftX; x < rightX; x++) {
            setLed(x, y, color);
        }
    }
}

//uses an array to set color of leds
function setLedsOnOrOffByArray(ledMatrix: number[][], color: number) {
    for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 8; x++) {
            if (ledMatrix[y][x] == 1) {
                setLed(x, y, color);
            } else if (ledMatrix[y][x] == 0) {
                let off = neopixel.colors(NeoPixelColors.Black);
                setLed(x, y, off);
            }
        }
    }
}

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
addressLedsByArray(GO, neopixel.colors(NeoPixelColors.Purple));

pause(1000);
*/