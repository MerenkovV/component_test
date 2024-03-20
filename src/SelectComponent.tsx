import React, { Children, ReactHTMLElement, useEffect, useRef, useState } from 'react'
import './styles/OptionsStyles.scss'

export type ObjType = {
    label: string,
    image?: string
}

type Props = {
    className: string,
    objArray: Array<ObjType>,
}

function useOutsideClick(callback: () => void) {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
}

const SelectComponent = ({className, objArray}:Props) => {

  const wrapperRef = useOutsideClick(()=>{setOpen(false)});

  const [objects, setObjects] = useState<ObjType[]>(objArray)
  const [selectedObj, setSelectedObj] = useState<ObjType[]|[]>([])
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const foundObj = objArray.filter((obj)=>obj.label.includes(search))
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
        }} viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"></path></svg>
      <div className={`select__items${open === false ? '_closed' : ''} ${className}`}>
        {objects.map((obj, index)=>{
          return <p className={`select__item ${
            selectedObj.find(select=>select.label===obj.label)!==undefined ? 'target' : ''
          }`} onClick={()=>{
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