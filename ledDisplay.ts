let strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB);

// create array for strings to go in
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

//display a square with one color
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

function clearBigArray() {
    bigArray = [[], [], [], [], [], [], [],]; 
}


// onderstaande functies kunnen niet gecompiled worden naar een hex file, 
// omdat het anders een te grote filesize krijgt :c

/*
function seperatesNumberInDigits(getal: number) {
    let num = getal;
    let digits = [];

    while (num > 0) {
        digits.push(num % 10);
        num = Math.trunc(num / 10);
    }
    digits.reverse();
    let length = digits.length;
    for (let h = 0; h < length; h++) {
        pickFromArray(digits, h); 
    }
}

function pickFromArray(digits: number[], counter: number) {
    let displayedNumber: string;
    switch (digits[counter]) {
        case 0:
            addToBigArray(getIcon("c"));
            break;
        case 1:
            addToBigArray(getIcon("c"));
            break;
        case 2:
            addToBigArray(getIcon("c"));
            break;
        case 3:
            addToBigArray(getIcon("c"));
            break;
        case 4:
            addToBigArray(getIcon("c"));
            break;
        case 5:
            addToBigArray(getIcon("c"));
            break;
        case 6:
            addToBigArray(getIcon("c"));
            break;
        case 7:
            addToBigArray(getIcon("c"));
            break;
        case 8:
            addToBigArray(getIcon("c"));
            break;
        case 9:
            addToBigArray(getIcon("c"));
            break;
    }
    return displayedNumber;
}
*/