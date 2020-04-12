import { sumar, multiplicar, restar, dividir } from '../maths.js';

describe('Calculos matematicos', () =>{
    test('Prueba de sumas', ()=> {
        expect(sumar(1,1)).toBe(2);
    });
    test('Multiplicar ', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
});