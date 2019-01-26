const isEmoji = str => {
    const ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
    ];
    if (str.match(ranges.join('|'))) {
        return true;
    }
    return false;
};

const validateInput = input => {
    const errors = [];
    if (input === '') {
        errors.push('It should not be empty');
    }
    if (isEmoji(input)) {
        errors.push('It contains emoji');
    }
    if (input.length > 100) {
        errors.push('It should not exceed 100 characters');
    }
    return errors;
};

export default validateInput;
