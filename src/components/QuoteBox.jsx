import React from 'react';
import { useState } from 'react';
import quotes from '../quotes.json';


const QuoteBox = () => {
  console.log(quotes);

  const [ index, setIndex ] = useState(Math.floor(Math.random()*(quotes.length)));

  const changeQuote = () => {
    setIndex(Math.floor(Math.random()*(quotes.length)))
  }

  const color = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871"]
  const randomColor = Math.floor(Math.random()*(color.length))

  document.body.style = `background: ${color[randomColor]}`

    return (
        <div>
            <h1 className='quote' style={{color: color[randomColor]}} > 
            <i class="fa-solid fa-quote-left" style={{color: color[randomColor]}}></i>
             {quotes[index].quote} 
              </h1>
            <h2 className='author' style={{color: color[randomColor]}}> {quotes[index].author}  </h2>
            <button onClick={changeQuote} className="button" style={{backgroundColor: color[randomColor]}}> 
            <i className="fa-solid fa-angle-right"></i> 
      </button>
            
        </div>
    );
};

export default QuoteBox;