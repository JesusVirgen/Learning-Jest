const customer = {
    name: 'Jesus Virgen',
    balance: 500,
    type: 'Premium'
};

describe('Customer testing', () => {
    test('When customer is premium', () => {
        expect( customer.balance ).toBeGreaterThan(400);
    });
    test('When customer is Jesus Virgen', () => {
        expect(customer).toMatchSnapshot();
    });
    test('Is not another customer', () => {
        expect(customer.name).not.toBe('Jose');
    });
    test('When customer is not premium', () => {
        expect( customer.balance ).not.toBe(400);
    });
});