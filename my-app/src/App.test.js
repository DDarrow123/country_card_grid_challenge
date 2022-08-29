import { screen, render } from '@testing-library/react';
import App from './App';

// Test visibility of main card
describe('card visibility', () => {
  it("main card is visible on the page", () => {
    render(<App />);
    const cardText = screen.getByText('FRONT-END')
    expect(cardText).toBeVisible()
  });
})
