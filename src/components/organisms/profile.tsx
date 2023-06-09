import ProfileStatistics from "@/components/molecules/Cards-profile";
import Navbar from "@/components/molecules/navbar";

const ProfileComponent = ({name , bio}:any) =>{

    return(
        <>
            <Navbar/>
            <ProfileStatistics
                name={name}
                bio={bio} 
            />
        </>
    )
}


export default ProfileComponent;