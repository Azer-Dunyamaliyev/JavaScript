function faktorial(n) {
    let s = 1;
    if (1 <= n && n <= 1000000) {
        for (let i = 1; i <= n; i++) {
            s *= i
        }
        return s.toString().length
    } else {
        return false
    }
}
console.log(faktorial(4));