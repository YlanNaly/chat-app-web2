export type User = {
    email: String;
    password: String;
    name: String;
    googleId: Number;
    bio: String;
    status: String;
}

export type UserLogin = {
    email: String;
    password: String;
    name: String;
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