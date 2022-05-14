import styled from 'styled-components';

export const Input = styled.input<{ margin: number }>`
width: 100%;
height: 20px;
margin: ${props => props.margin};
`