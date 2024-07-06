"use client"
import React from 'react'
import EditButton from './EditButton';



const ProfileCard = ({url}:{url:string}) => {
  const [ishidden, setIshidden] = React.useState<boolean>(true);
  return (
    <div
    onMouseEnter={() => setIshidden(false )}
    onMouseLeave={() => setIshidden(true)}
    className="w-48 h-48 rounded-full overflow-hidden p-2 bg-yellow-300 relative isolate ">
    <img src={url} alt="profile" className="w-full h-full object-cover rounded-full" />
    <div className={`w-full  h-full absolute top-0 left-0 flex items-center justify-center
       bg-none p-1 rounded-full ${ishidden?"hidden" :""}`}>
      <EditButton />
    </div>
  </div>
  )
}

export default ProfileCard
