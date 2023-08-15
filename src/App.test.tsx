// Imports
import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, it } from 'vitest';

// To Test
import App from './App';

describe('Renders main page correctly', async () => {
    beforeAll(async () => {
        // Setup
        render(<App />);
    });
    /**
     * Passes - shows title correctly
     */
    it('Should render the page correctly', async () => {
        const h1 = screen.queryByText('Improve your front-end skills by building projects');

        // Post Expectations
        expect(h1).not.toBeNull();
    });
});