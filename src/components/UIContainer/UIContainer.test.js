import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UIContainer from './UIContainer';

afterEach(cleanup);

it('should be visible', () => {
    const { container } = render(<UIContainer />); 
    expect(container).toBeInTheDocument()
});