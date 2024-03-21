import React from 'react';
import './styles/App.scss'
import { ObjType } from './types/types';
import SelectComponent from './SelectComponent';

function App() {

  const objArr: ObjType[] = [
    {label: 'First1111111111111First1111111111111', image: ''},
    {label: 'Second', image: ''},
    {label: 'Third', image: ''},
    {label: 'Fourth ', image: ''},
    {label: 'Fifth', image: ''},
    {label: 'Sixth ', image: ''},
    {label: 'First', image: ''},
    {label: 'Second', image: ''},
    {label: 'Third', image: ''},
    {label: 'Fourth ', image: ''},
    {label: 'Fifth', image: ''},
    {label: 'Sixth ', image: ''},
  ]

  return (
    <div className="App">
      <SelectComponent className='large light' objArray={objArr}/>
      <SelectComponent className='medium dark' objArray={objArr}/>
      <SelectComponent className='small color' objArray={objArr}/>
    </div>
  );
}

export default App;
