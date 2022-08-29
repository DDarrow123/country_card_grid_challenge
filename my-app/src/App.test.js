import { screen, render } from '@testing-library/react';
import App from './App';

// Test mock fetch and data response
const fetchCountries = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const countryList = await response.json()
  return countryList;
};

const unmockedFetch = global.fetch

beforeAll(() => {
  global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve([])
  })
})

afterAll(() => {
  global.fetch = unmockedFetch
})

describe('fetchCountries', () => {
  test('mocked data returns successfully', async () => {
    render(<App />);
    const json = await fetchCountries()
    expect(Array.isArray(json)).toEqual(true)
    expect(json.length).toEqual(0)
  })
})

// Test visibility of card types
describe('card visibility', () => {
  it("main card is visible on the page", () => {
    render(<App />);
    const cardText = screen.getByText('FRONT-END')
    expect(cardText).toBeVisible()
  });
})
