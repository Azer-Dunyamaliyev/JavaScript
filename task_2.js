let a = "introDUction to algorithms";
let newString = "";

if (a.length <= 50) {
    for (let i = 0; i < a.length; i++) {
        if (i === 0 || a[i - 1] === " ") {
            newString += a[i].toUpperCase();
        } else {
            newString += a[i].toLowerCase();
        }
    }
} else {
    console.log(false);
}

console.log(newString);
