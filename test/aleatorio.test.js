const Aleatorio = require('../lib/aleatorio')
const a = new Aleatorio();

describe('Aleatorio' , () => {
    test('o inicio do intervalo eh um valor negativo' , () => {
        a.gerarNumeroAleatorio(-10, -20)
        expect(a.resultado).toBe(-1);
    });

    test('o fim do intervalo eh um valor negativo' , () => {
        a.gerarNumeroAleatorio(-10, -20)
        expect(a.resultado).toBe(-1);
    });

    test('o inicio do intervalo eh igual ao fim do intervalo' , () => {
        a.gerarNumeroAleatorio(1, 1)
        expect(a.resultado).toBe(-1);
    });

    test('um intervalo valido [200, 3000] eh fornecido' , () => {
        a.gerarNumeroAleatorio(200, 300)
        expect(a.resultado).not.toBe(-1);
    });
});