import { Message } from "@/pages/api/requests";
import Navbar from "../molecules/navbar";
import Cookies from "js-cookie";

export default function DisplayMessage({ response }: any){
    return (
        <div>
          <header>
            <Navbar />
          </header>
          <div>
          <h1>{Cookies.get("channel_name")}</h1>
            {response?.messages?.map((message: Message) => {
              return (
                <div key={message.id}>
                  <h2>{message.sender?.name}</h2>
                  <div>
                    <p>{message.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    )
}