import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    getQuotes()
      .then(setQuote)
  },[]);

  const handleClick = () => {
    getQuotes()
      .then(setQuote)
  }

  async function getQuotes() {
    try {
      const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 'fcHaaVUsVJg0//7Nu+TT6g==uuMMEYAFN2fBJt7W'
        }
      });
      const quote = res.json();

      if(!res.ok) {
        return new Error('Somtheing went absolutely wrong!')
      }

      return quote;
    } catch (err) {
      setError(err.message);
    }
    
  }

  return (
    <div id='quote-wrapper'>
      <div id='quote-box'>
        <div id='quote-content'>
          <div id='text'>
            <span id='quote-mark'>
              <i className='fa fa-quote-left'></i>
            </span>
            {error.length ? error : quote?.map(item => (
              `${item.quote}`
            ))}
          </div>
        </div>
        <div id='author'>
        {error.length ? '' : quote?.map(item => (
              `-${item.author}`
            ))}
          </div>
        <div id='quote-handlers'>
          <div id='quote-socials'>
            <a id='tweet-quote' href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Two%20roads%20diverged%20in%20a%20wood%2C%20and%20I%E2%80%94I%20took%20the%20one%20less%20traveled%20by%2C%20And%20that%20has%20made%20all%20the%20difference.%22%20Robert%20Frost" title='Tweet this quote!' target='_blank'>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        
          <button onClick={handleClick} id='new-quote'>
            New quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App
