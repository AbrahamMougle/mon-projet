export default async function fetchData(routeApi:string) {
   const res= await fetch(routeApi)
   if (!res.ok) {
      throw new Error('une erreur est survenir lors appel Api')
   }
   const resJson= await res.json()
   
   return resJson.product    
}