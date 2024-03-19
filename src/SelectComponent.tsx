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
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(()=>{
    const foundObj = objArray.filter((obj)=>obj.label.includes(search))
    setObjects(foundObj)
  }, [search])

  return (
    <div ref={wrapperRef} className={`select ${className}`} onClick={()=>setOpen(true)}>
      <input className={`select__input ${className} ${open ? 'rounded' : ''}`} type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <div className={`select__items${open === false ? '-closed' : ''} ${className}`}>
        {objects.map((obj, index)=>{
          return <p className='select__item'  key={index}>{obj.label}</p>
        })}
      </div>
    </div>
  )
}

export default SelectComponent