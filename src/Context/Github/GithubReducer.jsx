const githubReducer = (state, action)=>{

   switch(action.type){

      case 'GET_USERS':
         return {
            ...state, 
            users: action.payload
         }
      case 'CLEAR_USERS':
         return{
            ...state,
            users: []
         }

      case 'GET_USER':
         return{
            ...state,
            user:action.payload
         }

      case 'GET_REPOS':
         return{
            ...state,
            repos:action.payload

         }
            
         
      default:
         return state
   }

}


export default githubReducer