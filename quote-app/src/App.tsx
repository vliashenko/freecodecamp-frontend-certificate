import { useState, useEffect } from 'react'
import { IQuotes, IGetQuotes } from './types'
import { BASE_KEY, BASE_NAME, TWEETER_HREF} from './constants'
import {
  Main,
  Box,
  Content,
  Text,
  QuoteMark,
  Author,
  Handlers,
  Social,
  Tweet,
  ChangeQuote,
  Rotate
} from './App.styled';

function App() {
  const [quote, setQuote] = useState<null | IQuotes[]>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getQuotes()
      .then(setQuote)
  },[]);

  const handleClick = () => {
    getQuotes()
      .then(setQuote)
  }

  const getQuotes: IGetQuotes = async () => {
    setLoading(true);

    try {
      const res = await fetch(BASE_NAME, {
        headers: {
          'X-Api-Key': BASE_KEY
        }
      });
      const quote = res.json();

      if(!res.ok) {
        return new Error('Somtheing went absolutely wrong!')
      }

      setLoading(false);

      return quote;
    } catch (err: any) {
      setError(err.message);
    }
    
  }

  return (
    <Main id='quote-wrapper'>
      <Box id='quote-box'>

        <Content id='quote-content'>
          <Text id='text'>
            <QuoteMark id='quote-mark'>
              <i className='fa fa-quote-left'></i>
            </QuoteMark>
            {error?.length ? error : quote?.map(item => (
              `${item.quote}`
            ))}
          </Text>
        </Content>

        <Author id='author'>
          {error?.length ? '' : quote?.map(item => (
            `-${item.author}`
          ))}
         </Author>

        <Handlers id='quote-handlers'>
          <Social id='quote-socials'>
            <Tweet 
              id='tweet-quote' 
              href={TWEETER_HREF} 
              title='Tweet this quote!' 
              target='_blank'
            >
              <i className="fa-brands fa-twitter"></i>
            </Tweet>
          </Social>
        
          <ChangeQuote disabled={loading} onClick={handleClick} id='new-quote'>
            {loading ? <Rotate className="fa-solid fa-spinner"></Rotate> : 'New quote'}
          </ChangeQuote>
        </Handlers>
      </Box>
    </Main>
  );
};

export default App
