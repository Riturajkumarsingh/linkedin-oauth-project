"use client";

import { useSelector } from "react-redux";
import ProfileCard from "../../components/ProfileCard";

export default function ProfilePage() {

  const user = useSelector((state:any)=>state.user.user);

  if(!user){
    return <div className="text-center mt-20 text-xl">No user data</div>
  }

  return(
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ProfileCard user={user}/>
    </div>
  )

}