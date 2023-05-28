import { useEffect} from "react";
import { useRouter } from 'next/router';
import axios from "axios";
import { BASE_URL } from "@/pages/api/base";
import { SubmitHandler, useForm } from "react-hook-form/dist";
import { User, UserLogin } from "@/pages/api/requests";
import Authentication from "@/components/organisms/authentication";

const SignUp =()=>{
  const router = useRouter();
  const onSubmit: SubmitHandler<User> = data => {
    axios.post<User>(
    `${BASE_URL}/users/signup`,data
    )
    .then(res => {
      if(res.status == 201 || res.status == 200) {

        localStorage.setItem('nom', data.name.toString());
        localStorage.setItem('email', data.email.toString());
        localStorage.setItem('motDePasse', data.password.toString());

        router.push("/channel/channel")
      }
      else{
        router.push("/signup");
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
        title={"Inscription"} 
        isLogin={false} 
        handleSubmit={onSubmit}    
    />
  )
}

export default SignUp;