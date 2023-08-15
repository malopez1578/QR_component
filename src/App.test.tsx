// Imports
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';

// To Test
import App from './App';

describe('Renders main page correctly', async () => {
    beforeAll(async () => {
        // Setup
        await render(<App />);
    });
    /**
     * Passes - shows title correctly
     */
    it('Should render the page correctly', async () => {
        const h1 = await screen.queryByText('Vite + React');

        // Post Expectations
        expect(h1).not.toBeNull();
    });

    /**
     * Passes - shows the button count correctly present
     */
    it('Should show the button count set to 0', async () => {
        // Setup
        const button = await screen.queryByText('count is 0');

        // Expectations
        expect(button).not.toBeNull();
    });

    /**
     * Passes - clicks the button 3 times and shows the correct count
     */
    it('Should show the button count set to 3', async () => {
        // Setup
        const button = await screen.queryByTestId('count');
        
        // Pre Expectations
        expect(button).not.toBeNull();

        // Actions
        fireEvent.click(button as HTMLElement);
        fireEvent.click(button as HTMLElement);
        fireEvent.click(button as HTMLElement);
        
        // Post Expectations
        expect(button?.innerHTML).toBe('count is 3');
    });
});