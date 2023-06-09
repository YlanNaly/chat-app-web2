import { useRouter } from 'next/router';
import axios from "axios";
import { BASE_URL } from "@/pages/api/base";
import { SubmitHandler, useForm } from "react-hook-form/dist";
import { UserLogin } from "@/pages/api/requests";
import Authentication from "@/components/organisms/authentication";
import Cookies from "js-cookie";

const Login =()=>{
  const router = useRouter();
  
  const onSubmit: SubmitHandler<UserLogin> = data => {
    axios.post<UserLogin>(
    `${BASE_URL}/users/login`
    ,data)
    .then(res => {
      if(!res.data.status) {
        return;
      }
      localStorage.setItem('users',JSON.stringify(res.data.user))
      Cookies.set("token", res.data.user.token);
      Cookies.set("username", res.data.user.name);
      Cookies.set("id", res.data.user.id);

      router.push("/channel/channel")
    })
    .catch(er => console.log(er))
  }
  return(
    <Authentication 
        title={"Authentication"} 
        isLogin={true} 
        handlerSubmit={onSubmit}
    />
  )
}

export default Login;