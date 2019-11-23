import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from './../../utilities';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline Component', () => {

    describe('Have props', () => {
        
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description',
            }
            wrapper = setUp(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render an H1', () => {
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        })

        it('Should render a description', () => {
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })

    })

    describe('Have NO props', () => {
        
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it('Should not render', () => {
            const component = findByTestAttr(wrapper, 'HealdlineComponent');
            expect(component.length).toBe(0);
        })

    })

})
