describe('Pruebas en el archivo demo.test.js', () => {

    test('Deben de ser igual los string,', () => {
        //1.inicialización
        const mensaje = 'hola mundo';

        //2.Estimulo
        const mensaje2 = `hola mundo`;


        //3.Observar comportamiento
        expect(mensaje).toBe(mensaje2)
    })
})