import { ChannelMessageProps, Message } from "@/pages/api/requests";
import Cookies from "js-cookie";
import Navbar from "../molecules/navbar";
import { Col, Container, Form, Row } from "react-bootstrap";
import Button from "../atoms/button";
import { AiFillEdit } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

export default function DisplayChannel({
  response,
  setMessageContent,
  handleClick,
  moveToEditChannel,
}: ChannelMessageProps) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setMessageContent(event.target.value);
  }

  return (
    <div style={{
        marginTop:"102px" , 
        marginLeft:"12px" ,
        border:"solid 1px grey",
        boxShadow:"2px 1px 2px 1px",
        borderRadius:"12px",
        padding:"12px 12px"}}>
      <header>
        <Navbar/>
      </header>
      <Container>
      <Row>
          <Col>
      <center>
      <h1>{Cookies.get("channel_name") || "Channel"} 
      <span 
      onClick={moveToEditChannel}
      style={{fontSize:"33px",float:"right"}}
      >
      <AiFillEdit/>
      </span></h1>
      </center>
      <div>
        {response?.messages?.map((message: Message) => {
          return (
            <>
              <div>
                <h2>{message.sender?.name}</h2>
                <div>
                  <li>{message.content}</li>
                </div>
              </div>
            </>
          );
        })}
        <Form>
          <Form.Control onChange={handleChange}/>
          <Button onClick={handleClick}>
            <FaArrowRight/>
          </Button>
        </Form>
      </div>
      </Col>
      </Row>
      </Container>
    </div>
  );
}
