let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);

let bigArray: number[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

// calculates which lednumber belongs to xy coordinates
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

// can set an image of multiple colors
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

//for displaying a square with one color
function displaySquare(leftY: number, rightY: number, leftX: number, rightX: number, color: number) {
    for (let y = leftY; y < rightY; y++) {
        for (let x = leftX; x < rightX; x++) {
            setLed(x, y, color);
        }
    }
}

// uses an array to set leds (one color only)
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

// sets "GO"


// shows whole string from big array
function stringByArray(bigString: number[][], color: number) {
    for (let i = 0; i < bigString[0].length; i++) {
        for (let y = 0; y < 7; y++) {
            for (let x = 0; x < 8; x++) {
                let tempx = x + i;
                let newx = tempx - i;

                if (bigString[y][tempx] == 1) {
                    setLed(newx, y, color);
                } else if (bigString[y][tempx] == 0) {
                    let off = neopixel.colors(NeoPixelColors.Black);
                    setLed(newx, y, off);
                }
            }
        }
        strip.show();
        pause(200);
    }
}

// makes a big array from multiple characters (as arrays)
function addToBigArray(character: number[][]) {
    for (let y = 0; y < 7; y++) {
        for (let x = 0; x < character[y].length; x++) {
            bigArray[y].push(character[y][x]);
            // acts as a space
            if (x + 1 == character[y].length) {
                bigArray[y].push(0);
            }
        }
    }
}

function seperatesNumberInDigits(getal: number) {
    let num = getal;
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();

    for (let h = 0; h < digits.length; h++) {
        if (digits[h] == 0) {
            addToBigArray(zero);
        } else if (digits[h] == 1) {
            addToBigArray(one);
        } else if (digits[h] == 2) {
            addToBigArray(two);
        } else if (digits[h] == 3) {
            addToBigArray(three);
        } else if (digits[h] == 4) {
            addToBigArray(four);
        } else if (digits[h] == 5) {
            addToBigArray(five);
        } else if (digits[h] == 6) {
            addToBigArray(six);
        } else if (digits[h] == 7) {
            addToBigArray(seven);
        } else if (digits[h] == 8) {
            addToBigArray(eight);
        } else if (digits[h] == 9) {
            addToBigArray(nine);
        }
    }
}


