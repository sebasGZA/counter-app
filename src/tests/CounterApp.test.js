import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from "../CounterApp"

describe('Pruebas de <CounterApp/>', () => {
    let wrapper = shallow(< CounterApp />);

    beforeEach(() => {
        wrapper = shallow(< CounterApp />)
    })

    test('Debe de mostrar <CounterApp /> correctamente', () => {

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
        const value = 100
        const wrapper = shallow(< CounterApp value={value} />)
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe('100')
    })

    test('Debe de incrementar con el botón +1', () => {
        // const btn1 = wrapper.find('button').at(0)
        // console.log(btn1.html())
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        // console.log(counterText)
        expect(counterText).toBe('11')
    })

    test('Debe de disminuir con el botón -1', () => {
        // const btn1 = wrapper.find('button').at(2)
        // console.log(btn1.html())
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        // console.log(counterText)
        expect(counterText).toBe('9')
    })
})