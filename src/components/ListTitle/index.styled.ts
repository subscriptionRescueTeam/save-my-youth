import styled from 'styled-components';

export const ListTitle = styled.div<{ underline: boolean, color?: string }>`
display: flex;
justify-content: space-between;
width: 100%;
height: 24px;
border-bottom: ${props => props.underline ? "0.2rem" : 0} solid ${props => props.color ? props.color : "#DDDDDD"};
`

export const Title = styled.span`
font-size: 1.2rem;
`

export const More = styled.button`
font-size: 1rem;
`