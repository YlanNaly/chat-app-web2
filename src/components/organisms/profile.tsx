import ProfileStatistics from "@/components/molecules/Cards-profile";
import Navbar from "@/components/molecules/navbar";

const ProfileComponent = (props:any) =>{
    return(
        <>
            <Navbar/>
            <ProfileStatistics
                name={props.name}
                channel={1}
            />
        </>
    )
}


export default ProfileComponent;