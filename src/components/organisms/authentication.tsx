import { User, UserLogin } from "@/pages/api/requests";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
interface IAuthentication {
  title: string,
  isLogin:boolean,
  handleSubmit:(e:any)=>void;
}

const Authentication = (props:IAuthentication) => {
  const { register,formState: { errors }, handleSubmit } = useForm<UserLogin | User>();
  
    return(
    <div className="form-wrapper">
      <Container>
        <Row>
          <Col>
            <Form className="form-container" onSubmit={handleSubmit(props.handleSubmit)}>
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