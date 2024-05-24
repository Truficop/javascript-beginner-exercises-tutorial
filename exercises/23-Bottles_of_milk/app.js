// Your code here:
// function sing(x) {
//     for (let i = 0; i < (x); i++) {
//         let song = x + " bottles of milk on the wall, " + x + " bottles of milk. Take one down and pass it around, " + (x-1) + " bottles of milk on the wall."
//         if (x === 1) {
//             song += x + " bottles of milk on the wall, " + x + " bottles of milk. Take one down and pass it around, Take one down and pass it around, no more bottles of milk on the wall."
//         }
//         console.log(song);
//         x--;
//     }
// }

// sing(3)

// function sing(x) {
//     let song;
//     for (let i = 0; i < x; i++) {
//         song = x + " bottles of milk on the wall, " + x + " bottles of milk. Take one down and pass it around, " + (x-1) + " bottles of milk on the wall.";
//         if (x === 1) {
//             song += "1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.";
//         }
//         console.log(song);
//         x--;
//     }
// }

// sing(3);


function sing() {
    for (let bottles = 99; bottles > 0; bottles--) {
        if (bottles === 1) {
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
        } else if (bottles === 2) {
            console.log("2 bottles of milk on the wall, 2 bottles of milk. Take one down and pass it around, 1 bottle of milk on the wall.");
        } else {
            console.log(bottles + " bottles of milk on the wall, " + bottles + " bottles of milk. Take one down and pass it around, " + (bottles-1) + " bottles of milk on the wall.");
        }
    }
    console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
}

sing();