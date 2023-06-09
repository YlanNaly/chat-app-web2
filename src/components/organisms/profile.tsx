import ProfileStatistics from "@/components/molecules/Cards-profile";
import Navbar from "@/components/molecules/navbar";
import { useRouter } from "next/router";

const ProfileComponent = (props:any) =>{
    const route = useRouter();
    const redirectToMessage = (id:number) => {
      return route.push(`/message/${id}`)
    }
    return(
        <>
            <Navbar/>
            <ProfileStatistics
                name={props.name}
                bio={props.bio}
                onClick={redirectToMessage(props.id)}
            />
        </>
    )
}


export default ProfileComponent;