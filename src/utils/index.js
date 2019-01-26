import emojiRegex from 'emoji-regex';

const validateInput = input => {
    const regex = emojiRegex();
    const errors = [];
    if (input === '') {
        errors.push('It should not be empty');
    }
    if (regex.test(input)) {
        errors.push('It contains emoji');
    }
    if (input.length > 100) {
        errors.push('It should not exceed 100 characters');
    }
    return errors;
};

export default validateInput;
