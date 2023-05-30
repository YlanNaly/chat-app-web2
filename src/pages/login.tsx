import { useEffect} from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { BASE_URL } from "@/pages/api/base";
import { SubmitHandler, useForm } from "react-hook-form/dist";
import { UserLogin } from "@/pages/api/requests";
import Authentication from "@/components/organisms/authentication";

const Login =()=>{

  return(
    <Authentication 
        title={"Authentification"} 
        isLogin={true} 
    />
  )
}

export default Login;