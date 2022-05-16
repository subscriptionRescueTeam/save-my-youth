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
  margin-left: 0.7rem;
  margin-right: 1.3rem;
`;

const TitleItem = styled.div`
  font-family: Noto Sans;
  font-weight: 700;
  font-size: 1rem;
`;

export type CommonHeaderProps = {
  title: string;
  clickBefore: (event: React.MouseEvent<HTMLElement>) => void;
};

const CommonHeader = ({ title, clickBefore }: CommonHeaderProps) => {
  return (
    <Container>
      <Item onClick={clickBefore}>
        <ArrowLeft />
      </Item>
      <TitleItem>{title}</TitleItem>
      <Item>
        <Hamburger />
      </Item>
    </Container>
  );
};

export default CommonHeader;
