import footerGithub from '@assets/images/footer.png';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PALETTE from '@constants/palette';

const ptag = [
  { title: 'HOME', nav: '' },
  { title: '서비스 소개', nav: 'info' },
  { title: '팀 소개', nav: 'info' },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <StyledContainer>
      <StyledFlex>
        {ptag.map((i) => (
          <StyledTag key={i.title} onClick={() => navigate(`/${i.nav}`)}>
            {i.title}
          </StyledTag>
        ))}
      </StyledFlex>
      <StyledImg
        src={footerGithub}
        width="30"
        alt="git"
        onClick={() => window.open('https://github.com/subscriptionRescueTeam/save-my-youth')}
      />
      <StyledBottom>© Copyright 2022 청약구조대 </StyledBottom>
    </StyledContainer>
  );
};

export default Footer;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${PALETTE.DARK_020};
  background-color: ${PALETTE.LIGHT_020};
  padding: 1.2rem;
  margin-top: 117px;
`;

const StyledFlex = styled.div`
  display: flex;
`;

const StyledImg = styled.img`
  margin: 1.5rem 0;
`;

const StyledBottom = styled.div`
  font-family: 'Pretendard-Light';
  font-size: 0.7rem;
`;

const StyledTag = styled.p`
  font-size: 0.8rem;
  font-family: 'Pretendard-Bold';
  ::after {
    margin: 0 10px;
    content: '|';
  }
  &:last-child::after {
    content: none;
  }

  cursor: pointer;
`;
