import React, { useState } from 'react';
import './styles/App.scss'
import { ObjType } from './types/types';
import SelectComponent from './SelectComponent';

function App() {

  const objArr: ObjType[] = [
    {label: 'First1111111111111First1111111111111', image: 'https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png'},
    {label: 'Second', image: 'https://cdn-icons-png.flaticon.com/512/858/858962.png'},
    {label: 'Third', image: 'https://alvarotrigo.com/blog/assets/imgs/2021-10-06/javascript-select-option-share.png'},
    {label: 'Fourth ', image: ''},
    {label: 'Fifth', image: ''},
    {label: 'Sixth ', image: ''},
    {label: 'First2', image: ''},
    {label: 'Second2', image: ''},
    {label: 'Third2', image: ''},
    {label: 'Fourth2 ', image: ''},
    {label: 'Fifth2', image: ''},
    {label: 'Sixth2 ', image: ''},
  ]

  const [state, setState] = useState<ObjType[]|[]>([])

  const getInfo = (info:ObjType[]|[]) => {
    setState(info)
  }

  return (
    <div className="App">
      <SelectComponent callback={getInfo} size='large' color='dark' objArray={objArr}/>
      <SelectComponent size='large' color='light' objArray={objArr}/>
      <SelectComponent objArray={objArr}/>
    </div>
  );
}

export default App;
