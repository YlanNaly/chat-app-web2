export type User = {
    email: String;
    password: String;
    name: String;
    googleId: Number;
    bio: String;
    status: String;
}

export type UserLogin = {
    status:boolean,
    user:{
        email: String;
        password: String;
        name: String;
        token:string
    }
}

export type Channel = {
    id:number;
    name:string;
    type:string;
}

export type ChannelMember = [
    {
    memberId: number;
    channelId:number;
    }
]