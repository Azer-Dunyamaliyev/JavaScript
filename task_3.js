function buildPalindrome(str) {
    let palindrome = ""
    for (let i = str.length - 1; i >= 0; i--) {
        palindrome += str[i]
    }
    
    for (let i = 0; i < str.length; i++) {
        if (palindrome[i] !== str[i]) {
            return false
        } else {
            return true
        }
    }
}
console.log(buildPalindrome("qwert"));