// utils/fetchData.ts
export default async function fetchData<T>(routeApi: string): Promise<T> {
  const res = await fetch(routeApi);
  if (!res.ok) {
    throw new Error('Une erreur est survenue lors de l’appel API');
  }
  const response=await res.json()
  return response as T;
}
