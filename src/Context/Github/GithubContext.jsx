import { createContext , useReducer } from "react";
import githubReducer from "./GithubReducer";


const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL


export const GithubProvider = ({children})=>{

   const initialState = {
      users:[],
      user:{},
      repos:[]
     
   }

   const [state, dispatch] = useReducer(githubReducer, initialState)


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


   //get a singular user 

   const GetUser = async (username)=>{     

      const res = await fetch(`${GITHUB_URL}/users/${username}`)


      if(!res.ok){
         window.location ='/NotFound'
      }else{

         const data = await res.json()
      

     dispatch({
      type: 'GET_USER',
      payload: data

     })

      }

           
   }

   //get repos

    const GetUserRepos = async (username)=>{ 
      
      
      const params = new URLSearchParams({
         sort: 'created',
         per_page:10
      })

      const res = await fetch(`${GITHUB_URL}/users/${username}/repos?${params}`);   

      const data = await res.json();
      console.log(data);
      

     dispatch({
      type: 'GET_REPOS',
      payload: data

     })

      

           
   }


  return <GithubContext.Provider value={{
   users : state.users,
   user: state.user,
   repos:state.repos,   
   SearchUsers,
   clearUsers,
   GetUser,
   GetUserRepos,
   
  
  }}>

   {children}
  </GithubContext.Provider>
}

export default GithubContext
