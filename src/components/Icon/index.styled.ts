import styled from "styled-components";

export const Icon = styled.span<{ color: string, size?: number }>`
  display: flex;
  width:${props => props.size ? props.size : 28}px;
  height:${props => props.size ? props.size : 28}px;
  color: ${props => props.color ? props.color : "#00000"};
`;