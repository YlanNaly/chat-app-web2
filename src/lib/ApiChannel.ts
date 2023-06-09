  import { BASE_URL } from "@/pages/api/base";
import { ResponseChannel, CreateChannel } from "@/pages/api/requests";
import axios from "axios";
  import Cookies from "js-cookie";
  import { SetStateAction } from "react";
  
  //Get Channel
  export function getChannels(
    setResponse: React.Dispatch<SetStateAction<ResponseChannel | undefined>>
  ) {
    axios
      .get(`${BASE_URL}/channels`, {
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
  
  // Post Channel
  export function sendChannel(
    data: CreateChannel,
  ) {
    axios
      .post(`${BASE_URL}/channel`, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
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
  
  // Put channel
  export function editChannel(
    data: any,
    channel_id: any
  ) {
    console.log(data);
    axios
      .post(`${BASE_URL}/channels/${channel_id}/members`, data, {
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
      .catch((error) => {
        console.error(error);
      });
  }
  