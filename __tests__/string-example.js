const password = '123456';

describe('Valid password is not blank and have an extention of 6 caracters', () => {
    test('When password have 6 caracters', () => {
        expect( password ).toHaveLength(6);
    });
    test('When password is not blank', () => {
        expect(password).not.toHaveLength(0);
    });
});