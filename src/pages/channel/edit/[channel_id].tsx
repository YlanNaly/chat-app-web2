/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "@/components/molecules/navbar";
import { editChannel } from "@/lib/ApiChannel";
import { BASE_URL } from "@/pages/api/base";
import { EditChannel, User, UserOption } from "@/pages/api/requests";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Select from "react-select";

export default function EditChannel() {
  const [data, setData] = useState<EditChannel>({
    channelId: 0,
    members: [0],
  });
  const [usersAdded, setUsersAdded] = useState<any>([]);
  const [usersOptions, setUsersOptions] = useState<any>([]);
  const [users, setUsers] = useState<User>();
  const routes = useRouter();
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
  class optionModel {
    label: String;
    value: number;
    constructor(value: number, label: String) {
      this.label = label;
      this.value = value;
    }
  }

  function handleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    editChannel(data, Cookies.get("channel_id"));
  }

  function UsersSelected(users: UserOption[]) {
    return users.map((user) => {
      return user.value;
    });
  }
  function getUsers(
    setUsers: React.Dispatch<SetStateAction<User | undefined>>
  ) {
    axios
      .get(`${BASE_URL}/users`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          return response.data;
        }
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  function UsersOptions(users: User) {
    const UsersOptions = [];
    for (const user of users?.users) {
      const newUserOption = new optionModel(
        user.id,
        user.name
      );
      UsersOptions.push(newUserOption);
    }
    return UsersOptions;
  }
  
  const handleChange = async (selected: any, selection: any) => {
    const { action } = selection;
    if (action === "clear") {
    } else if (action === "select-option") {
    } else if (action === "remove-value") {
      console.log("remove");
    }
    setUsersAdded(selected);
    setData({
      ...data,
      members: UsersSelected(usersAdded),
    });
  };

  useEffect(() => {
    setData({
      ...data,
      channelId: parseInt(Cookies.get("id") || "0", 10),
    });
  }, [data]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  useEffect(() => {
    if (users) {
      setUsersOptions(UsersOptions(users));
    }
  }, [UsersOptions, users]);

  return (
    <div>
      <Container style={{marginTop:"102px"}}>
      <Navbar/>
        <Col>
        <Form onSubmit={handleClick}>
              <h3>Add some person</h3>
              <Select
                id="selectUsers"
                instanceId="selectUsers"
                isMulti
                name="colors"
                usersOptions={usersOptions}
                className="basic-multi-select"
                classNamePrefix="select"
                options={usersOptions}
                onChange={handleChange}
                placeholder="Users"
              />
              <Button style={{marginTop:"5px",float:"right"}} type="submit">Edit Channel</Button>
        </Form>
        </Col>
      </Container>
    </div>
  );
}
