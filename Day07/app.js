// Loops
let userName = "Umar";
let arr = ["One", "Two", "Three", "Four", "Five"]
// for (let i = 0; i < 1; i++) {
//     if ("Two" === arr.length[i]) {
//         console.log("This is 3")
//     } else if ("Two" === arr[i]) {
//         console.log("This is 2")
//     }
//     else {
//         console.log("This is else")
//     }}
let CheckNumber = prompt("Enter Your Number");
for (let i = 0; i < 5; i++) {
    if (CheckNumber === arr[i]) {
        // document.write(i)
        alert("This is Your No:" + CheckNumber)
    }
    else if (CheckNumber != arr[i] ) {
        alert("Wrong")
    }
}