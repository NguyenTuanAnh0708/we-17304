import React from "react";
import { Message } from "../../types";
import { Card, Avatar, CardHeader, Button, ButtonGroup } from "@mui/material";
interface Props {
  message: Message;
}
const MessageItem: React.FC<Props> = ({ message }) => {
  return (
    <Card className="message-item">
      {" "}
      <CardHeader
        avatar={
          <Avatar
            src={message.avatar}
            aria-label={message.name}
            alt={message.name}
          ></Avatar>
        }
        title={`${message.name} | ${message.timeSended} `}
        subheader={message.messages}
      />
      <ButtonGroup
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button variant="contained" color="success">
          Approve
        </Button>
        <Button variant="contained" color="error">
          Reject
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default MessageItem;
