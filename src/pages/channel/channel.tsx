import Navbar from "@/components/molecules/navbar";
import { Row } from "react-bootstrap";
import { Channel } from "../api/requests";
import ChannelComponent from "@/components/organisms/channel";
import { BASE_URL } from "../api/base";
import axios from "axios";
import router, { useRouter } from "next/router";
import { useEffect } from "react";
import { NextRequest } from "next/server";
export interface IChannelGrid {
    channels?: Channel[];
}

function DisplayChannel(props:IChannelGrid) {
    const {channels} = props;
    const router = useRouter();
    useEffect(()=>{
        (
            async function(){
                const res = await axios.get(`${BASE_URL}/channels`,{
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
                router.push("/login")
            }
        }
        catch(e){
            router.push("/login")
        }
    },[router])
    
    return(
    <>
    <Navbar/>
    <Row>
        {channels?.map(channel=>(
        <ChannelComponent channel={channel} key={channel.id}/>
        ))}
    </Row>
    </>
    )
}
export default DisplayChannel;