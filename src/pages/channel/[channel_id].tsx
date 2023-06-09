import { sendMessage, getMessageByChannelId } from "@/lib/ApiMessage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CreateMessage, ResponseMessage } from "../api/requests";
import DisplayChannel from "@/components/organisms/display-chanel";

export default function ChannelMessage() {
  const router = useRouter();
  const [data, setData] = useState<ResponseMessage>();
  const [messageContent, setMessageContent] = useState<any>();

  class messageForm {
    channelId: number;
    recipientId: number;
    content: String | undefined;

    constructor(
      channelId: number,
      recipientId: any,
      content: String | undefined
    ) {
      this.channelId = channelId;
      this.recipientId = recipientId;
      this.content = content;
    }
  }

  function handleClick() {
    let channel_id = parseInt(Cookies.get("id") || "", 10);
    let recipient_id = null;

    const message = new messageForm(channel_id, recipient_id, messageContent);
    sendMessage(message as CreateMessage);
  }

  function moveToEditChannel() {
    router.push(`/channel/edit/${Cookies.get("id")}`);
  }

  useEffect(() => {
    const channel_id = parseInt(Cookies.get("id") || "", 10);

    if (!isNaN(channel_id)) {
      getMessageByChannelId(setData, channel_id);
    }

    const fetchData = () => {
      if (!isNaN(channel_id)) {
        getMessageByChannelId(setData, channel_id);
      }
      setTimeout(fetchData, 1000);
    };

    const timeout = setTimeout(fetchData, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() =>{
    
  })

  return (
    <div>
      <DisplayChannel
        response={data}
        setMessageContent={setMessageContent}
        handleClick={handleClick}
        moveToEditChannel={moveToEditChannel}
      />
    </div>
  );
}