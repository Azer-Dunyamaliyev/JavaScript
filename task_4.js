//Dustur : S = (1/1 * 2) + (1/2 * 3) + (1/(n * (n + 1)); 

//Dustur: S = ((a1 + an) / 2) * n;

//Dustur: S = (((2*a1) + d(n - 1)) / 2) * n

//Dustur: an = a1 + d(n - 1);

//Dustur: d = an+1 - an;

let n = 12;
let a;
let S = 0;
for (let i = 1; i <= n; i++) {
    a = 1/(i * (i + 1));
    S += a
    console.log(S);
}




