import { BASE_URL } from "@/pages/api/base";
import { CreateMessage, ResponseMessage } from "@/pages/api/requests";
import axios from "axios";
import { SetStateAction } from "react";
import Cookies from "js-cookie";

export function sendMessage(data: CreateMessage) {
  axios
    .post(`${BASE_URL}/message`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        return response.data;
      } else {
        throw new Error(`Unexpected response status: ${response.status}`);
      }
    })
    .then((data) => {})
    .catch((error) => {
      console.error(error);
    });
}

export function getMessageByChannelId(
  setResponse: React.Dispatch<SetStateAction<ResponseMessage | undefined>>,
  Channel_id: number
) {
  axios
    .get(`${BASE_URL}/messages/channel/${Channel_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setResponse(response.data);
        return response.data;
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getMessageByUser(
  setResponse: React.Dispatch<SetStateAction<ResponseMessage | undefined>>,
  Channel_id: number
) {
  axios
    .get(`${BASE_URL}/messages/channel/${Channel_id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        setResponse(response.data);
        return response.data;
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
