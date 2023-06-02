import Navbar from "@/components/molecules/navbar";
import { Row } from "react-bootstrap";
import { Channel } from "../api/requests";
import ChannelComponent from "@/components/organisms/channel";
import { BASE_URL } from "../api/base";
import axios from "axios";
export interface IChannelGrid {
    channels: Channel;
}

export async function getServerSideProps({params}:any) {
    let rep;
    const {id} = params;
    try{
        rep = await axios.get(`${BASE_URL}/channel/${id}`,{
        headers:{
            authorization: process.env.NEXT_PUBLIC_JWT_TOKEN
        }
    });
    }
    catch(e){
        console.log(e)
        rep = {
            id:0,
            name:"channel 0",
            type:"private"
        }
    }
    return {
        props: {rep}
        };
    } 

const OneChannel = (props:IChannelGrid) =>{
    const {channels} = props;
    return(
    <>
    <Navbar/>
    <Row>
        <ChannelComponent channel={channels} key={channels?.id}/>
    </Row>
    </>
    )
}

export default OneChannel;