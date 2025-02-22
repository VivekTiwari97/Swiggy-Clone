import React from 'react'
import {useState,useEffect} from 'react'

const useInternetStatus = () => {
 
    const [online,setOnline]= useState(window.navigator.onLine)

    useEffect(()=>{
        const handleOnline =()=>{
            setOnline(true)
        }
        const handleOffline =()=>{
            setOnline(false)
        }
        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline);

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline)
        }
       
    },[online])
  return online
}

export default useInternetStatus