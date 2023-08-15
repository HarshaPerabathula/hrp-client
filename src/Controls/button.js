import "../Controls/styles.css";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: sticky;
  top: 8px;
  .button-style {
    border: none;
    padding: 10px 30px;
    background-color: #69c4ec;
    border-radius: 6px;
    margin: 10px;
    color: #ffffff;
    font-weight: 600;
  }
  .button-style:focus {
    outline: 1px solid #69c4ec;
  }
`;

const Button = ({ text, onClick }) => {
  return (
    <ButtonContainer>
      <button
        className="button-style"
        onClick={() => {
          onClick();
        }}
      >
        {text}
      </button>
    </ButtonContainer>
  );
};

export default Button;
