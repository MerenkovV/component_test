import React, { useEffect, useState } from 'react'
import './styles/Options/OptionsStyles.scss'
import { ObjType, Props } from './types/types';
import useOutsideClick from './utils/outsideClickHook';
import { cancelHandler, deleteTargetHandler, openHandler } from './utils/handlers';

const SelectComponent = ({color = 'dark', size = 'large', objArray, callback}:Props) => {

  const wrapperRef = useOutsideClick(()=>{setOpen(false)});

  const [objects, setObjects] = useState<ObjType[]>(objArray)
  const [selectedObj, setSelectedObj] = useState<ObjType[]|[]>([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const foundObj = objArray.filter((obj)=>obj.label.toLowerCase().trim().includes(search.toLowerCase().trim()))
    setObjects(foundObj)
  }, [search])

  useEffect(()=>{
    callback && callback(selectedObj)
  }, [selectedObj])

  return (
    <div className={`${color} ${size}`}>
    <div ref={wrapperRef} className={`select ${color} ${size}`} onClick={()=>setOpen(true)}>
      <div className='select__target-wrapper'>
        {
          selectedObj.length > 0 && selectedObj.map((obj, index)=><div key={index}
          className={`select__target`} onClick={e=>deleteTargetHandler(e, obj, setSelectedObj, selectedObj)}>
            {obj.label}</div>)
        }
      </div>
      
      <input className={`select__input ${open ? 'rounded' : ''}`} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>

      <svg className={`select__icon ${open ? 'inverted' : ''}`} 
        onClick={e=>openHandler(e, setOpen)} viewBox="0 0 24 24">
        <path fill="currentColor" d="M7 10l5 5 5-5z"></path>
      </svg>

      <div className='select__cancel' onClick={e=>cancelHandler(e, setSearch, setSelectedObj)}></div>

      <div className={`select__items${open === false ? '_closed' : ''}`}>
        {objects.map((obj, index)=>{
          return <>
          <p className={`select__item ${
            selectedObj.find(select=>select.label===obj.label)!==undefined ?
             'target' : ''} ${obj.image ? 'imaged' : ''}`} onClick={()=>{
            if(selectedObj.find(select=>select.label===obj.label)===undefined){
              setSelectedObj([...selectedObj, obj])
            }else{
              setSelectedObj(selectedObj.filter(select=>select.label!==obj.label))
            }
          }} key={index}>{
            obj.image ? <img src={obj.image} alt={obj.label} 
            className='select__image'/> : ''
          }{obj.label}</p>
          </>
        })}
      </div>
    </div>
    </div>
  )
}

export default SelectComponent