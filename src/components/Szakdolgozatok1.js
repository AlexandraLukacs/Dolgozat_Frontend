import React from 'react'
import Szakdolgozat from './Szakdolgozat'

export default function Szakdolgozatok1(props) {
  return (
    <div>
        {
            props.szakdogaLista.map((szakdoga)=>{
                return(<Szakdolgozat szakdoga={szakdoga} key={szakdoga.id} />)
            })
        }
    </div>
  )
}