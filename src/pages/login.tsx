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
    axios.post<UserLogin>(
    `${BASE_URL}/users/login`
    ,{
      headers:{
          authorization: process.env.NEXT_PUBLIC_JWT_TOKEN,
          'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      if(res.status == 201 || res.status == 200) {

        localStorage.setItem('nom', data.name.toString());
        localStorage.setItem('email', data.email.toString());
        localStorage.setItem('motDePasse', data.password.toString());

        router.push("/channel/channel")
        return;
      }
      router.push(`login`);
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