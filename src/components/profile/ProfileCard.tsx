import React from 'react'

const ProfileCard = ({url}:{url:string}) => {
  return (
    <div className="w-48 h-48 rounded-full overflow-hidden">
    <img src={url} alt="profile" className="w-full h-full object-cover" />
  </div>
  )
}

export default ProfileCard
