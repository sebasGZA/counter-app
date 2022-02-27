import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from "../CounterApp"

describe('Pruebas de <CounterApp/>',() => {
    test('Debe de mostrar <CounterApp /> correctamente', () => {
        const wrapper = shallow(< CounterApp saludo={0} />)
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
        const value = 100
        const wrapper = shallow(< CounterApp value={value} />)
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('100')
    })
})