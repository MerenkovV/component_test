import React from 'react';
import './styles/App.scss'
import SelectComponent, { ObjType } from './SelectComponent';

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
      <SelectComponent className='large' objArray={objArr}/>
      <SelectComponent className='medium' objArray={objArr}/>
      <SelectComponent className='small' objArray={objArr}/>
    </div>
  );
}

export default App;
