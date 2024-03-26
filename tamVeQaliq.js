function tamQaliq(a,b) {
    if (a >= b) {
        let qaliq = a % b
        let tam = (a - qaliq) / b
        return `Tam: ${tam}, Qaliq:${qaliq}`
    } else {
        return false
    }
}
console.log(tamQaliq(27,10));