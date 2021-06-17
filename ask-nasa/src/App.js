import './App.css';
import React, { useState } from 'react';
import GetPostData from './components/GetPostData';
import Input from './components/Input'

function App() {

  const [date, setDate] = useState('');
  return (
    <main>
      <>
          <h1>Choose a date to see the shot of the day</h1>
          <Input date={date} setDate={setDate}/>
          <GetPostData date={date} />
          </>
    </main>
  );
}

export default App;
