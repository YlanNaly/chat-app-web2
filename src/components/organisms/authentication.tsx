import { BASE_URL } from "@/pages/api/base";
import { User, UserLogin } from "@/pages/api/requests";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
interface IAuthentication {
  title: string,
  isLogin:boolean,
}

const Authentication = (props:IAuthentication) => {
  const { register,formState: { errors }, handleSubmit } = useForm<UserLogin | User>();
  const router = useRouter();
  
  const onSubmit: SubmitHandler<UserLogin> = data => {
    axios.post<UserLogin>(
    `${BASE_URL}/users/login`
    ,{
      headers:{
          authorization: process.env.NEXT_PUBLIC_JWT_TOKEN
      },
      body:data
    }  
    )
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
    <div className="form-wrapper">
      <Container>
        <Row>
          <Col>
            <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form-title">{props.title}</h2>

              <Form.Group className="form-input" controlId="formNom">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text"
                  {...register("name", { required: true, maxLength: 20 })}
                />
              </Form.Group>

              <Form.Group className="form-input" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email"
                {...register("email", { required: true, maxLength: 20 })}
                />
              </Form.Group>
              {errors.email && <p role="alert">{errors.email?.message}</p>}
              <Form.Group className="form-input" controlId="formMotDePasse">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", { required: true, maxLength: 20 })}
                />
              </Form.Group>
              {
                props.isLogin == false ?  
                <Form.Group className="form-input" controlId="formMotDePasse">
                <Form.Label>Bio</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("bio")}
                  />
              </Form.Group> :
              <></>
              }
              <Button 
              className="form-button" 
              variant="primary" 
              type="submit"
              style={{marginTop:"12px"}}
              >
                  {props.isLogin ? "Se connecter" : "S'inscrire"}  
              </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default Authentication;