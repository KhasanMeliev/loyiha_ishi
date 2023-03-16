import React from "react";
import { Link } from "react-router-dom";
import { ButtonWrapper } from "./styles";

const Enter = () => {
  return (
    <div>
      <h1 style={{ fontSize: "40px", color: "white" }}>Mavzuni tanlang</h1>
      <ButtonWrapper>
        <Link to="/square">
          <button>Kvadrat</button>
        </Link>
        <Link to="/rectangle">
          <button>To'g'ri To'rtburchak</button>
        </Link>
        <Link to="/quadratic">
          <button>Kvadrat Tenglama</button>
        </Link>
      </ButtonWrapper>
    </div>
  );
};

export default Enter;
