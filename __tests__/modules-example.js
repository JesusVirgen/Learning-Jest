import { suma } from '../js/funciones.js';

describe('Sum 2 numbers', () => {
    test('Sum 10 and 20, result 30', () => {
        expect(suma(10,20)).toBe(30);
    })
});