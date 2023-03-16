import { Button, NumberInput } from "@mantine/core";
import React, { useState } from "react";
import { Box, SolveProblem, Texts, Wrapper } from "./styles";

const Rectangle = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();

  const [output, setOutput] = useState(0);

  const yuzi = () => {
    setOutput(a * b);
  };
  const perimetr = () => {
    setOutput(2 * (a + b));
  };

  return (
    <Wrapper>
      <Box></Box>
      <Texts>
        <h1>
          To'g'ri to'rtburchak - hamma burchaklari toʻgʻri (yaʼni 360°/4 = 90°ga
          teng) boʻlgan yassi toʻrtburchak sanaladi
        </h1>
        <p>
          To'g'ri to'rtburchak perimetri:{" "}
          <i style={{ color: "yellow" }}>P = 2(a+b)</i>
        </p>
        <p>
          To'g'ri to'rtburchak yuzi: <i style={{ color: "yellow" }}>S = a*b</i>
        </p>

        <h2>
          Misol: To'g'ri to'rtburchak tomonlari 15 va 20ga teng. Uning
          perimetrini va yuzini toping?
          <br />
          <br />
          <i>
            Yechish: To'g'ri to'rtburchak perimetrini <b>"P"</b> deb olamiz va
            uning perimetrini topish uchun formula: <b>P=2(15+20)</b>
            <br />
            <br />
            To'g'ri to'rtburchak yuzini <b>S</b> deb olamiz va uning yuzini
            topish uchun formula: <b>S = 15*20</b>
          </i>
        </h2>
      </Texts>
      <SolveProblem>
        <h1> To'g'ri to'rtburchak tomonilari:</h1>
        <NumberInput
          placeholder="Birinchi tomon"
          withAsterisk
          value={a}
          onChange={(e) => setA(e)}
        />
        <NumberInput
          placeholder="Ikkinchi tomon"
          withAsterisk
          value={b}
          onChange={(e) => setB(e)}
        />
        <Button onClick={() => yuzi()}>Yuzi</Button>
        <Button onClick={perimetr}>Perimetri</Button>

        <p>Output: {output}</p>
      </SolveProblem>
    </Wrapper>
  );
};

export default Rectangle;
