import { it, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CheckoutHeader } from './CheckoutHeader';

describe('CheckoutHeader component', () => {
    it('displays the checkout header', () => {
        const cart = [{
            productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
        }];

        render(
            <MemoryRouter>
                <CheckoutHeader cart={cart} />
            </MemoryRouter>
        );

        expect(screen.getByTestId('checkout-header')).toBeInTheDocument();
    });
});