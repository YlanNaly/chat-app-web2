import axios from 'axios';
import { useRouter } from 'next/router';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BASE_URL } from './api/base';
interface IFormInput {
  name: String;
  email: String;
  password: String;
  bio:String;
}

const SignupPage = () => {
  const router = useRouter()
  const { register, formState: { errors }, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => {
    axios.post<IFormInput>(
    `${BASE_URL}/users`,data
    )
    .then(res => {
      if(res.status == 201) router.push("/global-chat")
      else{
        router.push("/signup");
        console.log(res.status)
      }
    })
    .catch(er => console.log(er))
  }

  return (
    <div className="form-wrapper">
      <Container>
        <Row>
          <Col>
            <Form className="form-container" onSubmit={handleSubmit(onSubmit)}>
              <h2 className="form-title">Inscription</h2>

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
              <Form.Group className="form-input" controlId="formMotDePasse">
                <Form.Label>Bio</Form.Label>
                <Form.Control
                  type="text"
                {...register("bio", { required: true})}
                  
                />
              </Form.Group>
              <Button type='submit' className="form-button" variant="primary">
                S&apos;inscrire
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignupPage;
