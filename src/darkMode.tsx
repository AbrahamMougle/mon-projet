import { useEffect, useState } from "react"; 

export default function DarkMode() {
  
  const [darkMode, setDarkMode] = useState(false);
  function toggle() {
    setDarkMode(prev => !prev)
    localStorage.setItem('theme',JSON.stringify(darkMode))
  
}
  useEffect(() => {
    const saveTheme=localStorage.getItem('theme')==='true'
    const htlm=document.documentElement
    console.log(htlm);
    
  
    if (saveTheme) {
      
      htlm.setAttribute("data-theme", "dark");
      
    } else {
     htlm.removeAttribute("data-theme");
      
    }
  }, [darkMode]);
    
  return <>
  <button  onClick={toggle
    }>
      {darkMode ? "🌙 Mode clair" : "🌑 Mode sombre"}
    </button>
  <div className="text-center font-bold mb-2">DARK MODE AND BRIGHT MODE </div>
   <section className="flex gap-2">
    <article className="border-1 border-white rounded-2xl w-[300px] p-4 shadow-sky-400 shadow-sm dark:bg-black">
      <h1 className="text-lg font-bold dark:text-white text-center"> MODE {darkMode? 'BRIGHT':"DARK" }    </h1>
      <div className="text-md dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut nesciunt repudiandae nobis distinctio, nihil vitae ipsa soluta fugit, officia deserunt totam voluptates ducimus. Animi quis modi facilis magni dolorem.</div>
    </article>
   </section>
    
   </>
 
}