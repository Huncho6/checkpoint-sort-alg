//leap year checker 
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
};

console.log(isLeapYear(2023));

//ticket price checker 
function getTicketPrice(age) {
    if (age <= 12) {
        return "Ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "Ticket price is $15.";
    } else if (age >= 18) {
        return "Ticket price is $20.";
    } else {
        return "Invalid age.";
    }
};

console.log(getTicketPrice(16));

//fibonacci sequence 
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

console.log(fibonacci(5))  // should give 5 

//palindrome checker
function isPalindrome(str) {
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true;
        }
        if (s[left] !== s[right]) {
            return false;
        }
        return checkPalindrome(s, left + 1, right - 1);
    }

    return checkPalindrome(str, 0, str.length - 1);
};

console.log(isPalindrome("tune")); // false
console.log(isPalindrome("madam"));//true

//power function 
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
};

console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81
