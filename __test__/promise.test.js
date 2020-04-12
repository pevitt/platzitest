import { getDataFromApi } from '../promise';

describe('Probando promesas', () => {
    test('Realizando una peticion a una api', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
        	console.log(data);
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });
    });

    test('Resuelve un Hola!', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    });

    test('Rechaza con un error', () => {
        return expect(Promise.reject('Errror')).rejects.toBe('Errror');
    });
    
});