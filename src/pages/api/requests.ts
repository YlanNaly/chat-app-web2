import { SetStateAction } from "react";

export type User = {
    users: any;
    email: string;
    password: string;
    name: string;
    googleId: Number;
    bio: string;
    status: string;
}

export type UserLogin = {
    status:boolean,
    user:{
        [x: string]: string;
        email: string;
        password: string;
        name: string;
        token:string
    }
}
export interface Channel {
    id: number;
    name: string;
    type?: string;
    createdAt?: string;
    updatedAt?: string;
    ownerId?: number;
    owner: {
      id?: string;
      name?: string;
      email?: string;
    };
  }
  
  export interface ResponseChannel {
    status?: boolean;
    channels?: [Channel];
  }
  
  export interface CreateChannel {
    name?: string;
    type?: string;
  }
  
  export interface EditChannel{
    channelId?: number 
    members?: [number]
  }
  export interface Message {
    id?: number;
    content?: string
    createdAt?: string
    updatedAt?: string
    senderId?: string
    recipiendtId?: any
    channelId?: number
    sender?: {
      id?: number
      name?: string
      email?: string
    }
  }
  
  export interface ResponseMessage {
    status?: boolean;
    messages?: [Message];
  }

  export interface CreateMessage {
    channelId?: number
    recipientId?: number
    content?: string
  }
  
  export interface UserOption {
    label: string
    value: number
  }

export interface EditProfilProps {
  sendUpdatedProfil: any;
  modalOpen: boolean;
}

export interface LoginProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sendLoginData: any;
  router: any;
}

export interface SignupProps {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sendSignUpData: any;
  router: any;
}

export interface ChannelProps {
  response: ResponseChannel;
}

export interface EditChannelProps {
  data: EditChannel;
  setData: React.Dispatch<SetStateAction<EditChannel>>;
  setUsersOptions?: React.Dispatch<SetStateAction<UserOption[]>>;
  users?: UserOption[];
  usersAdded?: UserOption[];
  UsersSelected?: any;
  setUsersAdded: React.Dispatch<SetStateAction<UserOption[]>>;
  handleClick?: any;
  handleClose?: any;
  dropIn?: any;
  modalOpen?: boolean;
  openSuccess?: boolean;
  openSuccessModal?: any;
  openFailModal?: any;
  closeSuccessModal?: any;
  closeFailModal?: any;
  usersOptions?: UserOption[];
}

export interface MessageProps {
  response: ResponseMessage;
}

export interface ChannelMessageProps {
  response: ResponseMessage | undefined;
  setMessageContent: React.Dispatch<SetStateAction<string | undefined>>;
  handleClick: any;
  moveToEditChannel: any;
}

export interface Channel {
  id: number;
  name: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  ownerId?: number;
  owner: {
    id?: string;
    name?: string;
    email?: string;
  };
}

export interface ResponseChannel {
  status?: boolean;
  channels?: [Channel];
}

export interface CreateChannel {
  name?: string;
  type?: string;
}

export interface EditChannel{
  channelId?: number 
  members?: [number]
}

export interface UserOption {
  label: string
  value: number
}
