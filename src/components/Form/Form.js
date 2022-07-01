import Button from "../Button/Button";
import styled from "styled-components";

export default function Form() {
  return (
    <FormWrapper>
      <label forhtml="name">Name of player</label>
      <input type="text" id="name" />
      <Button background="lightblue">Add player</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
