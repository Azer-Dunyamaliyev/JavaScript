// En kicik bolen

function bolen(n) {
    let m = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i != 1) {
            m = i
            return m
        }
        
    }
    
}
console.log(bolen(18));


// En boyuk bolen

// function bolen(n) {
//     let m = 0;
//     for (let i = n; i > 0; i--) {
//         if (n % i === 0 && i != n) {
//             m = i
//             return m
//         }
        
//     }
    
// }
// console.log(bolen(8));