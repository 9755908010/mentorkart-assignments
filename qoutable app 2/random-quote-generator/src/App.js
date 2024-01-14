import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const generateQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote.');
      }

      const data = await response.json();
      const { content, author } = data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
      setQuote('Failed to fetch quote.');
      setAuthor('');
    }
  };

  return (
    <div className="App">
      <div className="quote-container">
        <h2>Random Quote Generator</h2>
        <button onClick={generateQuote}>Generate Quote</button>
        <div className="quote">
          <p>{quote}</p>
          {author && <p>- {author}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
