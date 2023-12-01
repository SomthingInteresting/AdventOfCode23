const fs = require('fs');
const path = require('path');

function getCalibrationSum(filePath) {
    const data = fs.readFileSync(path.resolve(__dirname, filePath), 'utf8');
    const lines = data.split('\n');

    return lines.reduce((sum, line) => {
        const digits = line.match(/\d/g);
        if (digits) {
            const calibrationValue = parseInt(digits[0] + digits[digits.length - 1]);
            return sum + calibrationValue;
        }
        return sum;
    }, 0);
}

console.log(getCalibrationSum('puzzleInput.csv'));