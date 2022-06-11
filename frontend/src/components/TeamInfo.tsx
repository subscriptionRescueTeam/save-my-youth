import styled from 'styled-components';
import Team from '../assets/images/team.png';
import { ReactComponent as GitHub } from '../assets/icons/gitHub.svg';

const StyledWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLocationTitle = styled.div`
  font-family: 'Pretendard-Bold';
  font-size: 1.2rem;
`;

const StyledLocationDetail = styled.div`
  font-family: 'Pretendard-Medium';
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
`;

const StyledGit = styled.div`
  padding: 20px 0 50px 12px;
  cursor: pointer;
`;

const TeamInfo = () => {
  return (
    <>
      <img
        src="https://camo.githubusercontent.com/22ff7f89a5bd960b40b0d0daaec084592ff50e3cc5b3a4b7404724a6a199510e/68747470733a2f2f692e696d6775722e636f6d2f6c4773476e45392e706e67"
        width="100%"
      />
      <StyledWrapper>
        <StyledLocationTitle>팀원</StyledLocationTitle>
        <StyledLocationDetail>
          "청년을 구해줘!"를 함께 만든 ‘청약 구조대’ 팀원들입니다
        </StyledLocationDetail>
      </StyledWrapper>
      <img src={Team} width="100%" />
      <StyledWrapper>
        <StyledLocationTitle>청약구조대에 대해 더 알고 싶다면?</StyledLocationTitle>
        <StyledGit
          onClick={() => window.open('https://github.com/subscriptionRescueTeam/save-my-youth')}
        >
          <GitHub />
        </StyledGit>
      </StyledWrapper>
    </>
  );
};

export default TeamInfo;
