import './App.css';
import CountryCardGrid from './CountryCardGrid'

const App = () => {
  return (
    <>
     <div className='card-parent'>
      <div className='card-grid-wrapper'>
        <div className='card-main-wrapper'>
          <div className='card-country-name'>FRONT-END</div>
          <h1 className="header-card">valtech_</h1>
          <p className='card-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <CountryCardGrid/>
      </div>
      </div>
    </>
  );
}

export default App;
