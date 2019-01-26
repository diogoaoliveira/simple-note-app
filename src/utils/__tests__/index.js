import validateInput from '../index';

describe('Validation function', () => {
    describe('Validation emojis', () => {
        it('should return error if it has emoji on it', () => {
            const errors = validateInput('🤖');
            expect(errors).toEqual(
                expect.arrayContaining(['It contains emoji'])
            );
        });

        it('should return error if it is empty', () => {
            const errors = validateInput('');
            expect(errors).toEqual(
                expect.arrayContaining(['It should not be empty'])
            );
        });

        it('should return error if it has more than 100 characters', () => {
            const errors = validateInput(
                'hU3OnNt3qx0b2dDOewOiJfEdyZupasv3iK4T9HWY41m2ah47NsV9Qw0cx8x4d3H15075FghBdlEzPAIZx4dlthg3zlhp5dx5oVzchU3OnNt3qx0b2dDOewOiJfEdyZupasv3iK4T9HWY41m2ah47NsV9Qw0cx8x4d3H15075FghBdlEzPAIZx4dlthg3zlhp5dx5oVzc'
            );
            expect(errors).toEqual(
                expect.arrayContaining(['It should not exceed 100 characters'])
            );
        });

        it('should return no errors if there is valid input', () => {
            const errors = validateInput('New note');
            expect(errors).toEqual(expect.arrayContaining([]));
        });
    });
});
