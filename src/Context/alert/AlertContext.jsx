import { useReducer } from "react";
import { createContext } from "react";

const AlertContext = createContext()

export const AlertProvider = ({children})=>{
 
   const initialState = null;

   const [state, dispatch] = useReducer(alertReducer, initialState)

   const setAlert = (message, type)=>{
      dispatch({
         type: 'SET_ALERT',
         payload:{message, type}

      })

      setTimeout(()=> dispatch({type:'REMOVE_ALERT'}),4000)

   }

   return <AlertContext.Provider value={{
      alert: state,
      setAlert
   }}>


      {children}
   </AlertContext.Provider>



}

export default AlertContext