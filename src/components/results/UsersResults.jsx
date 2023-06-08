import {  useContext } from "react"
import UserItem from "./UserItem";
import GithubContext from "../../Context/Github/GithubContext";

function UsersResults() {

   const {users } = useContext(GithubContext)

   

  //  useEffect(()=>{

  //     fetchUsers();

  //  }, [])


   


  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">


      {users.map((user)=>(
         <UserItem key={user.id} user={user}/>
      ))}


    </div>
  )
}
export default UsersResults