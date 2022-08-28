import React, { useState, useEffect } from 'react';
import './App.css';

// API Base url
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
    'Berlin': 'Berlin, Germany\'s capital, dates to the 13th century. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city\'s also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.'
  },
  ES: {
    'Barcelona': 'Barcelona, the cosmopolitan capital of Spain\'s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.'
  },
  FR: {
    'Paris': 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.'
  },
  NL: {'Amsterdam': 'Amsterdam is the Netherlands\' capital, known for its artistic heritage, elaborate canal system and narrow houses with gabled facades, legacies of the city\'s 17th-century Golden Age. Its Museum District houses the Van Gogh Museum, works by Rembrandt and Vermeer at the Rijksmuseum, and modern art at the Stedelijk. Cycling is key to the city\'s character, and there are numerous bike paths.'
  },
  GB: {
    'London': 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic \'Big Ben\' clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.'
  }
}

const CountryCardGrid = () => {
  const [countries, setCountries] = useState(null)
  const [countryId] = useState(null);

  const fetchCountries = async () => {
    const response = await fetch(`${BASE_URL}`)
    console.log('response?', response);
    const countryList = await response.json()

    const { data } = countryList
    console.log('data comes back from request', data);

    setCountries(data.filter(country => {
        const updatedCountry = countryConfig[country.iso2]
          return country.country === updatedCountry;
        }))

    console.log('country data state first set', countries);
    }
    
    useEffect(() => {
      fetchCountries();

    // If the data was updated/were to change, we might consider some sort of
    // timeout function to grab the data every so often

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryId])

    console.log('state here:', countries);

    if (countries) {
    return (
        //iterate through each card and display the appropriate data
        //display height and width of card differently depending on which child it is - i.e. if first or last, 
      <>
        <div>
        { 
          countries.map(country => {
            return (
            <>
              <div>{country.country}</div>
              <div>{Object.keys(cityConfig[country.iso2]).join('')}</div>
              <div>{Object.values(cityConfig[country.iso2]).join('')}</div>
              <button>Explore More</button>
            </>
            )
          }) 
        }
        </div>
      </>
     )
    } else {
      return <div>Loading...</div>
    }
    
}
 
const App = () => {
  return (
    <>
      <div className=''>
        <div>FRONT-END</div>
        <h1 className="header-card">valtech_</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <CountryCardGrid/>
    </>
  );
}

export default App;
