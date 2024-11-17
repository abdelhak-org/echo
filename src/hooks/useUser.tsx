
import { useSession } from "next-auth/react"
import {User} from "@/types/interfaces"

const useUser = () => {
  const {data:session , status} =  useSession()
      if ( session === null ) return 
  return (
   
    {
      currentUser :session.user   ,
      status

    }
    
  )
}

export default useUser
