function deyisenler(x,y) {
    let s;
    s = (x**2 - 2*x*y + 4*y**2) / (x + 5) + (3*x**2 - y**2) / (y + 7)
    return (s / 10000).toFixed(3)
}
console.log(deyisenler(1000, -2000));