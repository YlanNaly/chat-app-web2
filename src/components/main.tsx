import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "./molecules/loader";

const Main = () => {
    const router = useRouter();

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            router.push('/profile');
        }else{
            router.push('/login');
        }

    }, [router]) 

    return (
        <Loader/>
    ); 
};

export default Main;