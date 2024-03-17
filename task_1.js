function startQuiz(rum1,rum2) {
    let num1 = ruleQuiz(rum1);
    let num2 = ruleQuiz(rum2);
    let result = num1 + num2;
    return buildRoman(result);
}

function ruleQuiz(num) {
    let romanNumbers = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    }
    let total = 0;
    let current,currentValue,next,nextValue;
    for (let i = 0; i < num.length; i++) {
        current = num[i];
        currentValue = romanNumbers[current]
        next = num[i + 1];
        nextValue = romanNumbers[next]
        if (next && currentValue  < nextValue) {
            total += nextValue - currentValue;
            i++
        } else {
            total += currentValue;
        }
    }
    return total
}

function buildRoman(roman) {
    if (roman < 1) {
        return " ";
    }

    if (roman >= 1000) {
        return "M" + buildRoman(roman - 1000)
    }

    if (roman >= 900) {
        return "CM" + buildRoman(roman - 900)
    }

    if (roman >= 500) {
        return "D" + buildRoman(roman - 500);
    }

    if (roman >= 400) {
        return "CD" + buildRoman(roman - 400);
    }

    if (roman >= 100) {
        return "C" + buildRoman(roman - 100);
    }

    if (roman >= 90) {
        return "XC" + buildRoman(roman - 90);
    }

    if (roman >= 50) {
        return "L" + buildRoman(roman - 50);
    }

    if (roman >= 40) {
        return "XL" + buildRoman(roman - 40);
    }

    if (roman >= 10) {
        return "X" + buildRoman(roman - 10);
    }

    if (roman >= 9) {
        return "IX" + buildRoman(roman - 9);
    }

    if (roman >= 5) {
        return "V" + buildRoman(roman - 5);
    }

    if (roman >= 4) {
        return "IV" + buildRoman(roman - 4);
    }

    if (roman >= 1) {
        return "I" + buildRoman(roman - 1);
    }
}

console.log(startQuiz("V","IV"));