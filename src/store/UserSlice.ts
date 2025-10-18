import { StateCreator } from "zustand";
interface identite{
  id: string | null;
  name: string | null;
  email: string | null;
}

 export interface UserSlice {
  identite:identite
  isLoggedIn: boolean;
  login: (user: identite) => void;
  logout: () => void;
}

export const createUserSlice : StateCreator<UserSlice>=((set,get,api) => ({
 identite:{
  id:'',
  name:'',
  email:''
 },
  isLoggedIn: false,
  login: (user) =>
    set({identite:{
      id:user.id,
      email:user.email,
      name:user.name
    },
      isLoggedIn: true,
    }),
  logout: () =>
    set({
      identite:{
        id:'',
        email:'',
        name:'',
      },
      isLoggedIn: false,
    }),
}));
