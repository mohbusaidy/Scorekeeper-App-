import styled from "styled-components";

export default styled.button`
  background-color: ${(props) =>
    props.background ? props.background : "Aliceblue"};
  border-radius: 5px;
  width: 100%;
`;
