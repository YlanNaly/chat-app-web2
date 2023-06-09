import { getMessageByUser } from "@/lib/ApiMessage";
import { useState, useEffect } from "react";
import { ResponseMessage } from "../api/requests";
import DisplayMessage from "@/components/organisms/display-message";
import Cookies from "js-cookie";

export default function Message() {
    const [data, setData] = useState<ResponseMessage>();
  
    useEffect(() => {
      const channel_id = parseInt(Cookies.get("channel_id") || "", 10);
  
      if (!isNaN(channel_id)) {
        getMessageByUser(setData, channel_id);
      }
  
      const fetchData = () => {
        if (!isNaN(channel_id)) {
          getMessageByUser(setData, channel_id);
        }
        setTimeout(fetchData, 1000);
      };
  
      const timeout = setTimeout(fetchData, 1000);
  
      return () => {
        clearTimeout(timeout);
      };
    }, []);
  
    return (
      <div>
        <DisplayMessage response={data} />
      </div>
    );
  }
  