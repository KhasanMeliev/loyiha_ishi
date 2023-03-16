import { Button, NumberInput } from "@mantine/core";
import React, { useState } from "react";
import { SolveProblem, Texts, Wrapper } from "./styles";

const Quadratic = () => {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [c, setC] = useState();

  const [output, setOutput] = useState(0);
  const [sharti, setSharti] = useState();

  const solve = () => {
    let root1;
    let root2;
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
      root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setOutput(`${root1} and ${root2}`);
    } else if (discriminant === 0) {
      root1 = root2 = -b / (2 * a);
      setOutput(`${root1} and ${root2}`);
    } else {
      let realPart = (-b / (2 * a)).toFixed(2);
      let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
      setOutput(
        `The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`
      );
    }
    let out = `${a === 1 ? "" : a}x\u00B2+${b}x+${c}=0`;
    setSharti(out);
  };

  return (
    <Wrapper>
      <Texts>
        <h1>
          Kvadrat tenglama — matematikada koʻp hadli, bir oʻzgaruvchili va
          ikkinchi darajali tenglama. Umumiy koʻrinishi odatda quyidagicha
          ifodalanadi:
        </h1>
        <img
          src="https://educatemath.com/wp-content/uploads/2022/07/Solving-with-the-Quadratic-Formula%E2%80%8B.jpg"
          alt=""
        />
        <ul>
          <li>a — birinchi (bosh) koeffitsiyent;</li>
          <li>b - ikkinchi koeffitsiyent</li>
          <li>c - ozod had</li>
        </ul>
      </Texts>
      <SolveProblem>
        <h1> Kvadrat tenglama raqamlarni kiriting:</h1>
        <NumberInput
          placeholder="a"
          withAsterisk
          value={a}
          onChange={(e) => setA(e)}
        />
        <NumberInput
          placeholder="b"
          withAsterisk
          value={b}
          onChange={(e) => setB(e)}
        />
        <NumberInput
          placeholder="c"
          withAsterisk
          value={c}
          onChange={(e) => setC(e)}
        />
        <Button onClick={() => solve()}>Hisoblash</Button>
        <p>
          Sharti: {sharti} <br />
          Output: {output}
        </p>
      </SolveProblem>
    </Wrapper>
  );
};

export default Quadratic;
