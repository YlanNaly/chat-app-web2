import Navbar from "@/components/molecules/navbar";
import { Row } from "react-bootstrap";
import { Channel } from "../api/requests";
import ChannelComponent from "@/components/organisms/channel";
import { BASE_URL } from "../api/base";
import axios from "axios";
export interface IChannelGrid {
    channels?: Channel[];
}

export async function getServerSideProps() {
    let rep;
    try{
        rep = await axios.get(`${BASE_URL}/channels`,{
        headers:{
            authorization: process.env.NEXT_PUBLIC_JWT_TOKEN
        }
    });
    }
    catch(e){
        rep = [];
    }

    const preprocessData = (data:any) =>{
        const processed:any[] = [];

        data.forEach((channel:Channel) =>{
            const {id,name} = channel;
            if(id && name ) processed.push(channel)
        })
        return processed;
    }
    return {
        props: {
                data: preprocessData(rep)
            },
        };
    } 

const Channel = (props:IChannelGrid) =>{
    const {channels} = props;
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

export default Channel;