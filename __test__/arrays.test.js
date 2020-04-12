import { arrayFruits, arrayColors } from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene un Platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
   
});

describe('Comprobaremos que existe un elemento', () => {
    test('¿Tiene Azul?', () => {
        expect(arrayColors()).toContain('azul');
    });
    test('No contiene un gris', () => {
        expect(arrayColors()).not.toContain('gris');
    });
    test('Comprobar el tamaño de un arreglo', () => {
        expect(arrayColors()).toHaveLength(5);
    });
    test('Comprabaremos que existe un color', () => {
        expect(arrayColors()).toContain('rosa');
    });
});