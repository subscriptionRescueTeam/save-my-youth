import styled, { css } from 'styled-components';
import { ArrowLeft, Hamburger } from '../../asset';
import COLOR from '../../constants/color';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 5px solid ${COLOR.LIGHT_010};
`;

const Item = styled.div`
  cursor: pointer;
  font-family: Noto Sans;
  font-weight: 700;
  line-height: 1.5rem;
  align-items: center;
  margin: 2.2rem;
`;

export type CommonHeaderProps = {
  title: string;
};

const CommonHeader = ({ title }: CommonHeaderProps) => {
  return (
    <Container>
      <Item>
        <ArrowLeft />
      </Item>
      <Item>{title}</Item>
      <Item>
        <Hamburger />
      </Item>
    </Container>
  );
};

export default CommonHeader;
