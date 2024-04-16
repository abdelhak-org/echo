
import { useSession } from "next-auth/react"


const useUser = () => {
  const {data:session , status} =  useSession()
  return (
   
    {
      session,
      status
    
    }
    
  )
}

export default useUser
