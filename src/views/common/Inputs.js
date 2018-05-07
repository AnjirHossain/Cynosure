import styled from "styled-components";

export const InputText = styled.input`
  font-size: 1.5em;
  background: #ddd;
  required: ${props => props.required};
`;
