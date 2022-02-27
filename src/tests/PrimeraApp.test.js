import React from 'react';
// import { render } from "@testing-library/react"
import PrimeraApp from "../PrimeraApp"
import { shallow } from 'enzyme'

describe('Pruebas de <PrimeraApp/>', () => {
    // test('Debe de mostrar el mensaje Hola, soy Gokú', () => {
    //     const saludo = 'Hola, soy Gokú'
    //     const { getByText } = render(< PrimeraApp saludo={saludo} />)

    //     expect(getByText(saludo)).toBeInTheDocument()
    // })

    test('Debe de mostrar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola, soy Gokú'
        const wrapper = shallow(< PrimeraApp saludo={saludo} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Gokú'
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(< PrimeraApp saludo={saludo} subtitulo={subtitulo} />)
        const textoParrafo = wrapper.find('p').text()
        expect(textoParrafo).toBe(subtitulo)
    })
})