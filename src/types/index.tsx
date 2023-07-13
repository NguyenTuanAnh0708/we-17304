export interface PostTypes {
  id: string;
  title: string;
  body: string;
  userId: string;
  tags: string[];
  reactions: number;
}

export interface Message {
  name: string;
  avatar: string;
  timeSended: string;
  messages: string;
}
