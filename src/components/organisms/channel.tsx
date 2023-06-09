import { Channel } from "@/pages/api/requests";
import CardLayout from "../molecules/Cards"
import { Button } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";
import { useRouter } from "next/router";

interface IChannel {
    channel: Channel;
}

const ChannelComponent = (props:IChannel)=>{
    const router = useRouter()
    return(
        <>
            <CardLayout 
            header={props.channel.name} 
            body={props.channel.type}   
            // eslint-disable-next-line react/no-children-prop
            children={
            <Button onClick={()=>router.push(`/channel/${props.channel.id}`)}>
            Go to this channel <FaArrowCircleRight/>
             </Button>
        }                  
            />
        </>
    )
}

export default ChannelComponent;