/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../../Nav';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
      render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);
    })
  
    // snapshot test
    it('renders snapshot', () => {
        render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
        />);
      })
      // assert value comparison
      expect({categories}).toMatchSnapshot();
    });

  describe('emoji is visible', () => {
      it('inserts emoji into the h2', () => {
          // Arrange
          const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
          />);;
          // Assert
          // eslint-disable-next-line testing-library/prefer-screen-queries
          expect(getByLabelText('camera')).toHaveTextContent('📸');
      });
  })

  describe('links are visible', () => {
    it('inserts text into the links', () => {
      // Arrange
      const { getByTestId } = render(<Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
      />);;
      // Assert
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })