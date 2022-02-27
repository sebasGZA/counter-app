import { retornaArreglo } from "../../bases/07-deses-arr"

describe('Pruebas de desestructuración', () => {
    test('Debe retornar un string y un número', () => {
        const [letras, numeros] = retornaArreglo()
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })
})