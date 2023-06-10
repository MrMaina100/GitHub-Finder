import { useState, useContext } from "react"
import GithubContext from "../../Context/Github/GithubContext";
import AlertContext from "../../Context/alert/AlertContext";

function UseSearch() {
   const [text, setText] = useState('');
   const {users, SearchUsers, clearUsers} = useContext(GithubContext);
   const {setAlert} = useContext(AlertContext)

   const handleSubmit = (e)=>{
      e.preventDefault();

      if(text === ''){
         setAlert('best you input something', 'error')
      }else{

         SearchUsers(text)
         setText('')
      }

      
   }

   const handleClick = (e)=> setText(e.target.value)

  


  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 gap-7 mb-8">
     <div>
      <form onSubmit={handleSubmit}>
         <div className="form-control">
            <div className="relative">
               <input type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                 placeholder="Search"
                 value={text}
                 onChange={handleClick}
                 
                 />

               <button type="submit" className="absolute top-0 right-0  rounded-l-none w-36 btn-lg">
                  Go

               </button>
            </div>
         </div>

      </form>

     </div>


     {users.length >0 && (

      <div>
      <button  onClick={clearUsers} className="btn btn-ghost btn-lg">
         clear

      </button>
     </div>

     )}

     
      </div>
  )
}
export default UseSearch