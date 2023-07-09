import React from "react";

const Time: React.FC = () => {
  const getCurrentTime = (): string => {
    return new Date().toLocaleString();
  };
  return (
    <>
      <h1>Current-Time</h1>
      <h2>{getCurrentTime()}</h2>
    </>
  );
};

export default Time;
