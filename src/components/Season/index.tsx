import { Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import axios from "axios";
const Season: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<string | null>();
  const handelClick = () => {
    position();
  };
  const position = async () => {
    setCurrentLocation("Seaching.....");
    await navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        getLocation(position.coords.latitude, position.coords.longitude);
      },
      (err) => setCurrentLocation("Get location err try again")
    );
  };
  const getLocation = async (latitude: number, longitude: number) => {
    let Geocoding;
    try {
      Geocoding = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude},+${longitude}&key=d4a25a98bbc148b0b68a84a6d9b5893b&language=vi&pretty=1`
      );
    } catch {
      setCurrentLocation("Get City Error");
      return;
    }
    setCurrentLocation(Geocoding.data.results[0].formatted);
  };
  return (
    <div className="season-display">
      <h1>Season-display</h1>
      <Button
        onClick={handelClick}
        sx={{
          marginBottom: "10px",
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Get Location
      </Button>
      <Typography variant="body1" component="span">
        <br />
        {currentLocation || "Click button get location"}
      </Typography>
    </div>
  );
};

export default Season;
