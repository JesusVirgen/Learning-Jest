const car = ['Product 1', 'Product 2', 'Product 3'];

describe('Test for car', () => {
    test('When car have 3 product', () => {
        expect( car ).toHaveLength(3);
    });
    test('When car is not blank', () => {
        expect(car).not.toHaveLength(0);
    });
});