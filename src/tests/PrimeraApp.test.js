import React from 'react';
import { getByText, render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"

describe('Pruebas de PrimeraApp', () => {
    test('Debe de mostrar el mensaje Hola, soy Gokú', () => {
        const saludo = 'Hola, soy Gokú'
        const { getByText } = render(< PrimeraApp saludo={saludo} />)

        expect(getByText(saludo)).toBeInTheDocument()
    })
})