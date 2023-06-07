import { createContext , useState } from "react";


const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL


export const GithubProvider = ({children})=>{

   const [users, setUsers] = useState([]);

   const fetchUsers = async ()=>{

      const res = await fetch(`${GITHUB_URL}/users`)

      const data = await res.json()

      setUsers(data);

      console.log(data);
   }

  return <GithubContext.Provider value={{
   users,
   fetchUsers,
  }}>

   {children}
  </GithubContext.Provider>
}

export default GithubContext
