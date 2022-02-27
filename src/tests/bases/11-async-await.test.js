import { getImagen } from "../../bases/11-async-await"

describe('Pruebas con async-await y fetch', () => {
    test('Debe de retornar el url de la imagen', async() => {
        const url = await getImagen()
        expect(typeof url).toBe('string')
        expect(url.includes('http://')).toBe(true)
    })
})