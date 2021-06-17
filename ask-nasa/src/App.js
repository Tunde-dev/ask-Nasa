import './App.css';
import React, { useState } from 'react';
import GetPostData from './components/GetPostData';

function App() {

  const [date, setDate] = useState('');
  return (
    <GetPostData date={date} />
  );
}

export default App;
