import React from "react";
import { Message } from "../../types";
import { List } from "@mui/material";
import "./styles.css";
import MessageItem from "./MessageItem";
interface Props {
  messages: Message[];
}
const Messages: React.FC<Props> = ({ messages }) => {
  return (
    <List className="list-message">
      {messages.map((message: Message) => (
        <MessageItem message={message} />
      ))}
    </List>
  );
};

export default Messages;
