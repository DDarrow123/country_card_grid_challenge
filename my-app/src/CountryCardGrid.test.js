import { screen, render } from '@testing-library/react';
import CountryCardGrid from './CountryCardGrid';
import '@testing-library/jest-dom/extend-expect';

const countries = [{
        cities: ['Aast, Abancourt'],
        country: 'France',
        iso2: 'FR',
        iso3: 'FRA'
    },
    {
        cities: ['Aast, Abancourt'],
        country: 'Germany',
        iso2: 'DE',
        iso3: 'DEU'
    },
    {
        cities: ['Aast, Abancourt'],
        country: 'Italy',
        iso2: 'IT',
        iso3: 'ITA'
    }];

// Test mock fetch and data response
const getCountries = async () => {
    const response = await fetch('https://countriesnow.space/api/v0.1/countries')
    const countryList = await response.json()

    return countryList;
  };

  const unmockedFetch = global.fetch
  
  beforeAll(() => {
    global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(countries)
    })
  })
  
  afterAll(() => {
    global.fetch = unmockedFetch
  })
  
  describe('fetchCountries', () => {
    test('mocked data returns successfully', async () => {
      render(<CountryCardGrid />);
      const json = await getCountries()
      expect(Array.isArray(json)).toEqual(true)
      expect(json.length).toEqual(3)
    })
  })

  it("show loading state...", async () => {
    render(<CountryCardGrid/>);
    expect(screen.getByText("Please wait. Loading cards...")).toBeInTheDocument();
  });