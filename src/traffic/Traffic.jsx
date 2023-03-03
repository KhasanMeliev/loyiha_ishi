import React from "react";
import {
  Box,
  Container,
  Green,
  Red,
  Rules,
  Stick,
  TrafficLight,
  Yellow,
} from "./styles.style";
const Traffic = () => {
  return (
    <Container>
      <TrafficLight>
        <Box>
          <div></div>
          <div></div>
          <div></div>
        </Box>
        <Stick />
      </TrafficLight>
      <Rules>
        <Red>
          <div></div>
          <p>RED — A red signal light means STOP</p>
        </Red>
        <Yellow>
          <div></div>
          <p>
            Green light signal means the driver can start the vehicle and move
            forward.
          </p>
        </Yellow>
        <Green>
          <div></div>
          <p>
            The Yellow light indicates to clear the road when the signal is
            changing from green to red
          </p>
        </Green>
      </Rules>
    </Container>
  );
};

export default Traffic;
