import React, { useState, useEffect } from 'react';
import './CountryCardGrid.css';

// API Base url (no auth required)
const BASE_URL = 'https://countriesnow.space/api/v0.1/countries'

// Configs
const countryConfig = {
  IT: 'Italy',
  DE: 'Germany',
  ES: 'Spain',
  FR: 'France',
  NL: 'Netherlands',
  GB: 'United Kingdom'
}

const cityConfig = {
  IT: {
    'Venice': 'Venice, the capital of northern Italy\'s Veneto region, is built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals.'
  },
  DE: {
    'Berlin': 'Berlin, Germany\'s capital, dates to the 13th century. The city\'s also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.'
  },
  ES: {
    'Barcelona': 'Barcelona, the cosmopolitan capital of Spain\'s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city.'
  },
  FR: {
    'Paris': 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine.'
  },
  NL: {'Amsterdam': 'Amsterdam is the Netherlands\' capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city\'s 17th-century Golden Age.'
  },
  GB: {
    'London': 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.'
  }
}

const CountryCardGrid = () => {
  const [countries, setCountries] = useState(null)
  const [countryId] = useState(null);

  const fetchCountries = async () => {
    try {
      const response = await fetch(`${BASE_URL}`)
      const countryList = await response.json()
  
      const { data } = countryList
  
      if (data) {
        setCountries(data.filter(country => {
          const updatedCountry = countryConfig[country.iso2]
          return country.country === updatedCountry;
        }));
      } else {
        console.log('Quel dommage! No data available to filter')
      }
    } catch (err) {
      console.error(err.message)
    }
  };
    
  useEffect(() => {
    fetchCountries();

    // If the data was updated/were to change, we might consider some sort of
    // timeout function to grab the data every so often

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryId]);

  if (countries) {
    return (
      <>
      { countries.map((country, index) =>
        <div className='card-wrapper' data-index={index} key={country.country}>
          <div className='card-country-name'>{country.country}</div>
          <div className='card-city-name'>{Object.keys(cityConfig[country.iso2]).join('')}</div>
          <div className="card-overlay">
            <div className='card-country-name'>{country.country}</div>
            <div className='card-city-name'>{Object.keys(cityConfig[country.iso2]).join('')}</div>
            <p className='card-desc'>{Object.values(cityConfig[country.iso2]).join('')}</p>
            <button className='card-explore-more' href='#'>Explore More</button>
          </div>
        </div>
      ) }
      </>
      )
   } else {
     return <div className='card-wrapper-loading'><div className='card-loading-text'>Please wait. Loading cards...</div></div>
   } 
}

export default CountryCardGrid;