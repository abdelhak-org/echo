'use client'
import  LoadingPage  from "../../components/dashboard/Loading";

export default function Loading() {



    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-screen h-screen  flex justify-center items-center">
        <LoadingPage/>
      </div>
    )
  }