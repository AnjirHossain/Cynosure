import styled from "styled-components";

export const TextArea = styled.textarea`
  font-size: 1.5em;
  background: #ddd;
  cols: ${props => props.cols}
  rows: ${props => props.rows}
  name: ${props => props.name}
  spellcheck: true
  wrap: hard
`;
