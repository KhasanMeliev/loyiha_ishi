import { Button, NumberInput } from "@mantine/core";
import React, { useState } from "react";
import { Box, SolveProblem, Texts, Wrapper } from "./styles";

const Square = () => {
  const [a, setA] = useState(1);
  const [output, setOutput] = useState(0);

  const yuzi = () => {
    setOutput(a * a);
  };
  const perimetr = () => {
    setOutput(4 * a);
  };

  return (
    <Wrapper id="/square">
      <Box></Box>
      <Texts>
        <h1>
          Kvadrat - tomonlari teng boʻlgan toʻgʻri burchakli toʻrtburchak.
          Kvadratning karama-qarshi tomonlari oʻzaro parallel, diagonallari
          oʻzaro teng va perpendikulyar boʻladi;
        </h1>
        <p>
          Kvadrat perimetri: <i style={{ color: "yellow" }}>4*a</i>
        </p>
        <p>
          Kvadrat yuzi: <i style={{ color: "yellow" }}>a**2</i>
        </p>

        <h2>
          Misol: Kvadratning tomoni 15 ga teng. Uning perimetrini va yuzini
          toping?
          <br />
          <br />
          <i>
            Yechish: kvadratning Perimetrini <b>"P"</b> deb olamiz va uning
            perimetrini topish uchun formula <b>P=4*15</b>
            <br />
            <br />
            Kvadratning yuzini <b>S</b> deb olamiz va uning yuzini topish uchun
            formula <b>S = 15**2</b>
          </i>
        </h2>
      </Texts>
      <SolveProblem>
        <h1> Kavdrat tomoni:</h1>
        <NumberInput
          placeholder="Kvadrat tomoni"
          withAsterisk
          value={a}
          onChange={(e) => setA(e)}
        />
        <Button onClick={() => yuzi()}>Yuzi</Button>
        <Button onClick={perimetr}>Perimetri</Button>

        <p>Output: {output}</p>
      </SolveProblem>
    </Wrapper>
  );
};

export default Square;
