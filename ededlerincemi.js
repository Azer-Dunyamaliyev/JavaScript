function EdedlerinCemi(n) {
    let s = 0;
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            s += i
        }
        return s
    } else if (n < 0) {
        for (let i = n; i <= 1; i++) {
            s += i
        }
        return s
    }
}
console.log(EdedlerinCemi(100));