import { useEffect} from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { BASE_URL } from "@/pages/api/base";
import { SubmitHandler, useForm } from "react-hook-form/dist";
import { UserLogin } from "@/pages/api/requests";
import Authentication from "@/components/organisms/authentication";

const Login =()=>{
  const router = useRouter();
  
  const onSubmit: SubmitHandler<UserLogin> = data => {
    console.log(data);
    
    axios.post<UserLogin>(
    `${BASE_URL}/users/login`
    ,data)
    .then(res => {
      if(res.data.status) {
        localStorage.setItem('users',JSON.stringify(res.data.user))
        
        router.push("/channel/channel")
      }
    })
    .catch(er => console.log(er))
  }
  useEffect(() => {
    const storedNom = localStorage.getItem('nom');
    const storedEmail = localStorage.getItem('email');
    const storedMotDePasse = localStorage.getItem('motDePasse');

    if (storedNom && storedEmail && storedMotDePasse) {
      router.push('/channel/channel');
    }
  }, [router]);
  return(
    <Authentication 
        title={"Authentification"} 
        isLogin={true} 
        handlerSubmit={onSubmit}
    />
  )
}

export default Login;