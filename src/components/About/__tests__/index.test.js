import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '../../About'

afterEach(cleanup);

// this will ensure that after each test we don't have to worry about leftover memory data that could give us false results

describe('About component', () => {
    // renders About test
    // First Test
    it ('renders', () => {
        render(<About/>);
    })

    // Second Test (i.e. "test case")
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
      })
    })