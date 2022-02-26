import { getSaludo } from "../../bases/02-template-string"

describe('Pruebas para 02-template-string', () => {
    test('Prueba en el método getSaludo para validar el valor del saludo', () => {
        const nombre = 'Sebastian'
        const saludo = getSaludo(nombre)

        expect(saludo).toBe(`Hola ${nombre}`)
    })

    test('getSaludo() Debe de retornar hola carlos si no hay argumento de nombra', () => {
        const nombre = 'carlos'
        const saludo = getSaludo()

        expect(saludo).toBe(`Hola ${nombre}`)
    })
})