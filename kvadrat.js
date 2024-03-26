function kvadrat(n) {
    for (let i = 1; i <= n; i++) {
        if (i**2 == n) {
            return i
        }
    }
    return "No"
}
console.log(kvadrat(36));