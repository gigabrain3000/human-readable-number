module.exports = function toReadable (number) {
  const readableNumbers = {
    1: {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    },
    2: {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    },
    3: {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }
  };

  switch(number.toString().length) {
    case 1:
        if (number === 0) {
            return "zero";
        }
        for (let digit in readableNumbers[1]) {
            if (digit == number) {
                return readableNumbers[1][digit];
            }
        }
    case 2:
        if (number < 20) {
            for (let digit in readableNumbers[2]) {
                if (digit == number) {
                    return readableNumbers[2][digit];
                }
            }
        }
        else {
            let sum = "";
            for (let digit in readableNumbers[3]) {
                if (digit == number.toString()[0]) {
                    sum += readableNumbers[3][digit];
                }
            }
            for (let digit in readableNumbers[1]) {
                if (digit == number.toString()[1]) {
                    sum += " " + readableNumbers[1][digit];
                }
            }
            return sum;
        }
        case 3:
            let sum = "";
            for (let digit in readableNumbers[1]) {
                if (digit == number.toString()[0]) {
                    sum += readableNumbers[1][digit] + " hundred";
                }
            }
            if (number.toString()[1] == 1) {
                for (let digit in readableNumbers[2]) {
                    if (digit == number.toString().slice(1)) {
                        sum += " " + readableNumbers[2][digit];
                    }
                }
            }
            else {
                for (let digit in readableNumbers[3]) {
                    if (digit == number.toString()[1]) {
                        sum += " " + readableNumbers[3][digit];
                    }
                }
                for (let digit in readableNumbers[1]) {
                    if (digit == number.toString()[2]) {
                        sum += " " + readableNumbers[1][digit];
                    }
                }
            }
        return sum;
  }
}
