/** import { useEffect} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from 'next/router';
import { UserLogin } from "./api/requests";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { BASE_URL } from "@/pages/api/base";

const Authentification = () => {
  const { register,formState: { errors }, handleSubmit } = useForm<UserLogin>();
  const router = useRouter();
  const onSubmit: SubmitHandler<UserLogin> = data => {
    axios.post<UserLogin>(
    `${BASE_URL}/users/login`,data
    )
    .then(res => {
      if(res.status == 201 || res.status == 200) {

        localStorage.setItem('nom', data.name.toString());
        localStorage.setItem('email', data.email.toString());
        localStorage.setItem('motDePasse', data.password.toString());

        router.push("/global-chat")
      }
      else{
        router.push("/login");
        console.log(res.status)
      }
    })
    .catch(er => console.log(er))
  }
  useEffect(() => {
    const storedNom = localStorage.getItem('nom');
    const storedEmail = localStorage.getItem('email');
    const storedMotDePasse = localStorage.getItem('motDePasse');
    const storedBio = localStorage.getItem('bio');

    if (storedNom && storedEmail && storedMotDePasse && storedBio) {
      router.push('/global-chat');
    }
  }, [router]);
  
    return(
    <div className="form-wrapper">
      <Container>
        <Row>
          <Col>
            <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form-title">Authentification</h2>

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

              <Button className="form-button" variant="primary" type="submit">
                Se connecter
              </Button>
              </Form>
          </Col>
        </Row>
      </Container>
    </div>
    )
}

export default Authentification; */