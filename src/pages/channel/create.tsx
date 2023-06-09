import {  sendChannel } from "@/lib/ApiChannel";
import { useForm } from "react-hook-form";
import { CreateChannel } from "../api/requests";
import Navbar from "@/components/molecules/navbar";
import { Container, Form, FormSelect } from "react-bootstrap";
import Button from "@/components/atoms/button";
import { useEffect, useState } from "react";
import ToastsMessage from "@/components/atoms/toasts";
import { useRouter } from "next/router";

export default function CreateChannelComponent() {
  const { register, handleSubmit } = useForm();
  const [showToast , setShowToast] = useState(false);
  const [mess , setMess] = useState("successfully created")
  const routes = useRouter();
  const onSubmit = async (data: CreateChannel) => {
    try{
        setShowToast(true)
        setMess("success")
        sendChannel(data);
    }
    catch(e){
        console.log(e)
        setShowToast(true)
        setMess(`Error:${e}`)
    }
    finally{
        setShowToast(false)
    }
  };
  useEffect(()=>{
    try{
        const token = JSON.parse(localStorage.getItem('users') || "").token;
        if(!token){
            routes.push("/login")
        }
    }
    catch(e){
        routes.push("/login")
    }
},[routes])
  return (
    <Container style={{
        marginTop:"100px"
    }}>
    <Navbar/>
    {
       showToast ?
        <ToastsMessage
        title={showToast ? "Yes !" : "Error !"}
        message={mess}
        variant={mess=="success" ? "success" : "danger" }
    /> : <></>
    }
    <Form onSubmit={handleSubmit(onSubmit)}>
        <center>
            <h1>Let&apos; talk
        </h1>
        </center>
        <Form.Group className="form-input" controlId="formNom">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
            {...register("name", { required: true, maxLength: 20 })}
            />
        </Form.Group>
        <FormSelect {...register("type",{required:true})}>
            <option>private</option>
            <option>public</option>
        </FormSelect>
        <Form.Group className="form-input" controlId="formMembers">
            <Form.Label>Members</Form.Label>
            <Form.Control type="text"
            {...register("members", { required: true, maxLength: 20 })}
            />
        </Form.Group>
        <Button
        type="submit"
        className="form-button"
        >Create channel</Button>
    </Form>
</Container>
  );
}