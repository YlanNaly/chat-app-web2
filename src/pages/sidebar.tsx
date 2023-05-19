import "../styles/sidebar_style.module.css";
import { useRouter } from 'next/router';
import {FaHome} from "react-icons/fa";
import {GiDiscussion} from "react-icons/gi";

const Sidebar = () => {
    const route = useRouter();
    return(
    <div>
       <nav>
            <ul>
                <li>
                    <div className="home-icon" 
                    onClick={()=>route.push("/")}
                    >
                        <FaHome style={{width:"20px" , height:"20px"}}/>
                    </div>
                </li>
                <li>
                    <div className="about-icon"
                    onClick={()=>route.push("/chanel")}
                    >
                        <GiDiscussion style={{width:"40px" , height:"30px"}}/>
                    </div>
                </li>
            </ul>
        </nav> 
    </div>
    )
}

export default Sidebar;