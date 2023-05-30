import { Channel } from "@/pages/api/requests";
import CardLayout from "../molecules/Cards"

interface IChannel {
    channel: Channel;
}

const ChannelComponent = (props:IChannel)=>{
    return(
        <>
            <CardLayout 
            header={props.channel.id} 
            title={props.channel.name} 
            body={props.channel.type}                  
            />
        </>
    )
}

export default ChannelComponent;