import React from "react";
import { Message } from "../../types";
import Messages from "../../components/Messages";
import { List, Container, Box, Typography } from "@mui/material";
import Season from "../../components/Season";
const Lab3: React.FC = () => {
  const getCurrentTime = (): string => {
    return new Date().toLocaleDateString();
  };
  const messages: Message[] = [
    {
      name: "Nguyễn Tuấn Anh",
      avatar:
        "https://instagram.fsgn2-3.fna.fbcdn.net/v/t51.2885-19/352164828_6061690383957595_4226750685049262225_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=107&_nc_ohc=knS7SsMSeqsAX9Wt833&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDjcWd4J3Wbe73P8jzrxK9RM1SnMzQmijhgdtm3qK66wQ&oe=64AFD022&_nc_sid=ee9879",
      timeSended: getCurrentTime(),
      messages: "This is test messages",
    },
  ];
  return (
    <div className="Lab3">
      <Container maxWidth="md">
        <Typography variant="h4" align="center">
          Lab2 - Lab3
        </Typography>
        <Box sx={{ bgcolor: "#fff", height: "100vh" }}>
          <Messages messages={messages} />
          <Season />
        </Box>
      </Container>
    </div>
  );
};

export default Lab3;
