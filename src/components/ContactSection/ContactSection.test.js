import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import ContactSection from './ContactSection';

afterEach(cleanup);

it('should be visible', () => {
    const { container } = render(<ContactSection />); 
    expect(container).toBeInTheDocument()
});

it('should have email', () => {
    render(<ContactSection/>);

    const emailElement = screen.getByText(/Email/i);

    expect(emailElement).toBeInTheDocument();
});

it('should have phone', () => {
    render(<ContactSection/>);

    const phoneElement = screen.getByText(/Phone/i);

    expect(phoneElement).toBeInTheDocument();
});