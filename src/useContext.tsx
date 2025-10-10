import { useContext, useEffect } from "react"
import { Theme } from "./contexte"

export default function useContexte() {
  const t=useContext(Theme)
  if (!t) {
    throw Error('le theme est de type undefined')
  }
  const {setTogle,togle,themeContext}=t
  function handTheme() {
    setTogle((togle)=>!togle)  
    localStorage.setItem('isTheme', JSON.stringify(!togle))
  }
  useEffect(()=>{
    const dark=localStorage.getItem('isTheme')==='true'
   
    setTogle(dark)
    console.log(dark);
    
  }
  ,[])
  return <div className={`flex  flex-col items-center justify-center h-screen ${themeContext.background} ${themeContext.font}`}> 
  <div >It is {togle?'Black':'white'} </div>
  <button onClick={handTheme} className={`border-2 border-black ${themeContext.background} ${themeContext.font}`} >Togle Theme</button> 
   
  </div>
}