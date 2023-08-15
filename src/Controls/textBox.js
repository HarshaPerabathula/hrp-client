import "../Controls/styles.css";
import styled from "styled-components";

const TextboxContainer = styled.div`
  position: sticky;
  top: 8px;
  .input-style {
    padding: 15px 30px;
    box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%),
      0px 3px 1px -2px rgb(0 0 0 / 5%), 0px 6px 16px 0px rgb(0 0 0 / 10%);
    border-radius: 8px;
    margin: 10px;
    font-weight: 600px;
    border: none;
  }
  .input-style:focus {
    outline: 1px solid #b7d1fb;
  }
`;

const Textbox = ({ value, type = "text", placeholder = "", onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <TextboxContainer>
      <input
        onChange={handleChange}
        value={value}
        className="input-style"
        id="textbox"
        type={type}
        placeholder={placeholder}
      />
    </TextboxContainer>
  );
};

export default Textbox;
