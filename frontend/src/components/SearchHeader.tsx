import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowLeft } from '../assets/icons/arrowLeft.svg';
import { ReactComponent as Hamburger } from '../assets/icons/hamburger.svg';
import PALETTE from '../constants/palette';

const StyledPage = styled.div`
  align-items: center;
  padding-right: 500px;
`;

const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 5px solid ${PALETTE.LIGHT_010};
`;

const Item = styled.div`
  cursor: pointer;
  font-weight: 700;
  margin-left: 0.7rem;
  margin-right: 1.3rem;
`;

const TitleItem = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;

export type CommonHeaderProps = {
  title: string;
};

const CommonHeader = ({ title }: CommonHeaderProps) => {
  const navigate = useNavigate();

  const clickBefore = () => {
    navigate('/');
  };

  return (
    <StyledPage>
      <Container>
        <Item onClick={clickBefore}>
          <ArrowLeft />
        </Item>
        <TitleItem>{title}</TitleItem>
        <Item>
          <Hamburger />
        </Item>
      </Container>
    </StyledPage>
  );
};

export default CommonHeader;
