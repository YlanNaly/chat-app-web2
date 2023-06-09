import ProfileComponent from "@/components/organisms/profile";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BASE_URL } from "./api/base";

const Profile = () =>{
    const routes = useRouter();
    const [currentUser , setCurrentUser] = useState({name : ""});
    useEffect(()=>{
        (
            async function(){
                const res = await axios.get(`${BASE_URL}/user`,{
                    headers:{
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('users') || "").token}`
                    }
                })
                setCurrentUser(res.data.user)
            }
        )()
    },[])
    useEffect(()=>{
        try{
            const token = JSON.parse(localStorage.getItem('users') || "").token;
            if(!token){
                routes.push("/login")
            }
        }
        catch(e){
            routes.push("/login")
        }
    },[routes])

    return(
        <ProfileComponent 
        name={currentUser.name}
        />
    )
}

export default Profile;