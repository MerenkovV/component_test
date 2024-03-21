import React, { useEffect, useRef, useState } from 'react'
import './styles/Options/OptionsStyles.scss'
import { ObjType, Props } from './types/types';
import useOutsideClick from './utils/outsideClickHook';

const SelectComponent = ({className, objArray}:Props) => {

  const wrapperRef = useOutsideClick(()=>{setOpen(false)});

  const [objects, setObjects] = useState<ObjType[]>(objArray)
  const [selectedObj, setSelectedObj] = useState<ObjType[]|[]>([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const foundObj = objArray.filter((obj)=>obj.label.toLowerCase().trim().includes(search.toLowerCase().trim()))
    setObjects(foundObj)
  }, [search])

  return (
    <div ref={wrapperRef} className={`select ${className}`} onClick={()=>setOpen(true)}>
      <div className='select__target-wrapper'>
        {
          selectedObj.length > 0 && selectedObj.map((obj, index)=><div key={index}
          className={`select__target ${className}`} 
          onClick={(e)=>{
            e.stopPropagation()
            setSelectedObj(selectedObj.filter(select=>select.label!==obj.label))
          }}>{obj.label}</div>)
        }
      </div>
      
      <input className={`select__input ${className} ${open ? 'rounded' : ''}`} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <svg className={`select__icon ${className} ${open ? 'inverted' : ''}`} onClick={e=>{
          e.stopPropagation()
          setOpen(prev=>!prev)
        }} viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5z"></path></svg>

      <div className={`select__cancel ${className}`} onClick={(e)=>{
        e.stopPropagation()
        setSearch('')
        setSelectedObj([])
      }}></div>

      <div className={`select__items${open === false ? '_closed' : ''} ${className}`}>
        {objects.map((obj, index)=>{
          return <p className={`select__item ${
            selectedObj.find(select=>select.label===obj.label)!==undefined ? 'target' : ''
          } ${className}`} onClick={()=>{
            if(selectedObj.find(select=>select.label===obj.label)===undefined){
              setSelectedObj([...selectedObj, obj])
            }else{
              setSelectedObj(selectedObj.filter(select=>select.label!==obj.label))
            }
          }} key={index}>{obj.label}</p>
        })}
      </div>
    </div>
  )
}

export default SelectComponent