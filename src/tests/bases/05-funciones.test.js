import { getUser, getUsuarioActivo } from "../../bases/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('getUser debe de retornar un objeto', () => {
        const user = getUser()
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        console.log(userTest)
        expect(user).toEqual(userTest)
    })

    test('getUsuarioActivo debe de retornar un objeto', () => {
        const userName = 'Sebastian'
        const user = getUsuarioActivo(userName)
        const userTest = {
            uid: 'ABC567',
            username: userName
        }

        expect(user).toEqual(userTest)
    })
})