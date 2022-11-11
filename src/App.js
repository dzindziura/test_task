import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import { ListGenerate } from './component/listGenerate/listGenerate';
import { ListItem } from './component/listItem/listItem'

function App() {
  const [data, setData] = useState('');

  return (
      <ListGenerate />
  );
}

export default App;
