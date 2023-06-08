import { createContext , useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL


export const GithubProvider = ({children})=>{

   const initialState = {
      users:[]
   }

   const [state, dispatch] = useReducer(githubReducer, initialState)

   const fetchUsers = async ()=>{

      const res = await fetch(`${GITHUB_URL}/users`)

      const data = await res.json()

     dispatch({
      type: 'GET_USERS',
      payload: data

     })

      console.log(data);
   }

   const SearchUsers = async (text)=>{

      const params = new URLSearchParams({
         q: text
      })

      const res = await fetch(`${GITHUB_URL}/search/users?${params}`)

      const {items} = await res.json()
      console.log(items);

     dispatch({
      type: 'GET_USERS',
      payload: items

     })

     
   }

   const clearUsers = ()=>{
      dispatch({
         type: 'CLEAR_USERS',
         
      })
   }

  return <GithubContext.Provider value={{
   users : state.users,
   SearchUsers,
   clearUsers
  }}>

   {children}
  </GithubContext.Provider>
}

export default GithubContext
