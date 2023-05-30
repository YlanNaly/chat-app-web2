import ProfileStatistics from "@/components/molecules/Cards-profile";
import Navbar from "@/components/molecules/navbar";

const ProfileComponent = () =>{
    return(
        <>
            <Navbar/>
            <ProfileStatistics
                name="Ylan"
                channel={1}
            />
        </>
    )
}


export default ProfileComponent;